import type { DMMF } from '@prisma/generator-helper';

import { uniq } from 'lodash';

import type { Settings } from '../types';
import { startCase, writeFile } from '../utils';
import { generateCreateManyMutation } from './generateCreateManyMutation';
import { generateCreateMutation } from './generateCreateMutation';
import { generateDataLoader, generateDataLoaders } from './generateDataLoaders';
import { generateDeleteManyMutation } from './generateDeleteManyMutation';
import { generateDeleteMutation } from './generateDeleteMutation';
import { generateDependencies } from './generateDependencies';
import { generateFieldResolver } from './generateFieldResolver';
import { generateFindFirstQuery } from './generateFindFirstQuery';
import { generateFindManyQuery } from './generateFindManyQuery';
import { generateFindUniqueQuery } from './generateFindUniqueQuery';
import { generateTypes } from './generateTypes';
import { generateUpdateManyMutation } from './generateUpdateManyMutation';
import { generateUpdateMutation } from './generateUpdateMutation';

export async function generateResolvers(
  models: DMMF.Model[],
  settings: Settings
) {
  const modelHash = models.reduce(
    (acc, model) => ({
      ...acc,
      [model.name]: model
    }),
    {}
  );
  /** construct dataloaders  */

  const fieldResolvers = models.filter(model =>
    model.fields.some(o => o.kind === 'object')
  );

  let loaders = [];

  for (const fieldResolver of fieldResolvers) {
    const primaryKey = fieldResolver.fields.find(o => o.isId);
    const uniqueKey = fieldResolver.fields.find(o => o.isUnique);

    const dataLoaders = fieldResolver.fields
      .filter(o => o.kind === 'object')
      .map(field =>
        generateDataLoader(
          fieldResolver,
          {
            primaryKey,
            uniqueKey
          },
          field,
          modelHash[field.type]
        )
      )
      .filter(Boolean);

    loaders = [...loaders, ...dataLoaders];
  }

  await generateDataLoaders(settings, loaders);
  await generateTypes(settings, loaders);

  for (const model of models) {
    const relationships = model.fields.filter(o => o.kind === 'object');
    const primaryKey = model.fields.find(o => o.isId);
    const uniqueKey = model.fields.find(o => o.isUnique);

    const fieldResolvers = relationships.map(field =>
      generateFieldResolver(
        model,
        {
          primaryKey,
          uniqueKey
        },
        field,
        modelHash[field.type]
      )
    );

    /** when no primary key exists, we can't include this. */
    const findFirstQuery = generateFindFirstQuery(settings, model);
    const findUnique = generateFindUniqueQuery(settings, model);
    const findMany = generateFindManyQuery(settings, model);

    const createMutation = settings.includeMutations
      ? generateCreateMutation(settings, model)
      : '';
    const createManyMutation = settings.includeMutations
      ? generateCreateManyMutation(settings, model)
      : '';
    const updateMutation = settings.includeMutations
      ? generateUpdateMutation(settings, model)
      : '';
    const updateManyMutation = settings.includeMutations
      ? generateUpdateManyMutation(settings, model)
      : '';
    const deleteMutation = settings.includeMutations
      ? generateDeleteMutation(settings, model)
      : '';
    const deleteManyMutation = settings.includeMutations
      ? generateDeleteManyMutation(settings, model)
      : '';

    const content = `
    @Resolver(() => ${model.name})
    export class ${model.name}Resolver {

      ${findFirstQuery}

      ${findUnique}
   
      ${findMany}

      ${fieldResolvers.join('\n')}

      ${createMutation}
      
      ${createManyMutation}

      ${updateMutation}

      ${updateManyMutation}

      ${deleteMutation}
      
      ${deleteManyMutation}
    }`;

    const argsDeps = [
      `Create${startCase(model.name)}Arg`,
      `Delete${startCase(model.name)}Arg`,
      `DeleteMany${startCase(model.name)}Arg`,
      `FindFirst${startCase(model.name)}Arg`,
      `FindMany${startCase(model.name)}Arg`,
      `FindUnique${startCase(model.name)}Arg`,
      `UpdateData${startCase(model.name)}Arg`,
      `UpdateWhere${startCase(model.name)}Arg`
    ].filter(m => content.includes(m));

    const dtoDeps = [
      `Create${startCase(model.name)}Dto`,
      `DeleteMany${startCase(model.name)}Dto`,
      `FindMany${startCase(model.name)}Dto`,
      `FindUnique${startCase(model.name)}Dto`,
      `UpdateData${startCase(model.name)}Dto`,
      `UpdateManyWhere${startCase(model.name)}Dto`,
      `UpdateWhere${startCase(model.name)}Dto`
    ].filter(m => content.includes(m));

    const scalarDeps = [`${startCase(model.name)}OrderByScalar`].filter(m =>
      content.includes(m)
    );

    await writeFile(
      `${settings.defaultOutput}/resolvers/${model.name}Resolver.ts`,
      `
        ${generateDependencies(content)}
        ${
          dtoDeps.length
            ? `import { ${dtoDeps.sort().join(', ')} } from '../dto/${
                model.name
              }Dto';`
            : ''
        }
        ${
          argsDeps.length
            ? `import { ${argsDeps.sort().join(', ')} } from '../arg/${
                model.name
              }Arg';`
            : ''
        }
         ${scalarDeps
           .map(scalar => `import { ${scalar} } from '../scalar/${scalar}';`)
           .join('\n')}
        ${uniq([
          `import { ${model.name} } from '../entities/${model.name}Entity';`,
          ...relationships
            .filter(field => content.includes(startCase(field.type)))
            .map(
              field =>
                `import { ${startCase(
                  field.type
                )} } from '../entities/${startCase(field.type)}Entity';`
            )
        ]).join('\n')}
        ${content}
      `
    );
  }
}
