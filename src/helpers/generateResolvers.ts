import type { DMMF } from '@prisma/generator-helper';

import { uniq } from 'lodash';

import type { Settings } from '../types';
import { startCase, writeFile } from '../utils';
import { generateCreateMutation } from './generateCreateMutation';
import { generateDeleteMutation } from './generateDeleteMutation';
import { generateDependencies } from './generateDependencies';
import { generateFieldResolver } from './generateFieldResolver';
import { generateFindManyQuery } from './generateFindManyQuery';
import { generateFindUniqueQuery } from './generateFindUniqueQuery';
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

  for (const model of models) {
    const relationships = model.fields.filter(o => o.kind === 'object');
    const primaryKey = model.fields.find(o => o.isId);
    const uniqueKey = model.fields.find(o => o.isUnique);

    const fieldResolvers = primaryKey?.name
      ? relationships.map(field =>
          generateFieldResolver(
            model,
            {
              primaryKey,
              uniqueKey
            },
            field,
            modelHash[field.type]
          )
        )
      : [];

    /** when no primary key exists, we can't include this. */
    const findUnique = generateFindUniqueQuery(model);
    const findMany = generateFindManyQuery(model);
    const createMutation = generateCreateMutation(model);
    const updateMutation = generateUpdateMutation(model);
    const deleteMutation = generateDeleteMutation(model);

    /**
     * todo:: fix update/delete types - swap out e.g. Prisma.${model.name}UpdateArgs['data'] for actual types
     * there are a few tables missing primary keys
     */
    const content = `
    @Resolver(() => ${model.name})
    export class ${model.name}Resolver {

      ${findUnique}
   
      ${findMany}

      ${fieldResolvers.join('\n\n')}

      ${createMutation}

      ${updateMutation}

      ${deleteMutation}
    }`;

    const argsDeps = [
      `Create${startCase(model.name)}Arg`,
      `Delete${startCase(model.name)}Arg`,
      `FindMany${startCase(model.name)}Arg`,
      `FindUnique${startCase(model.name)}Arg`,
      `UpdateData${startCase(model.name)}Arg`,
      `UpdateWhere${startCase(model.name)}Arg`
    ].filter(m => content.includes(m));

    const dtoDeps = [
      `Create${startCase(model.name)}Dto`,
      `Delete${startCase(model.name)}Dto`,
      `FindMany${startCase(model.name)}Dto`,
      `FindUnique${startCase(model.name)}Dto`,
      `UpdateData${startCase(model.name)}Dto`,
      `UpdateWhere${startCase(model.name)}Dto`
    ].filter(m => content.includes(m));

    const scalarDeps = [`${startCase(model.name)}OrderBy`].filter(m =>
      content.includes(m)
    );

    await writeFile(
      `${settings.defaultOutput}/resolvers/${model.name}.resolver.ts`,
      `
        ${generateDependencies(content)}
        ${
          dtoDeps.length
            ? `import { ${dtoDeps.sort().join(', ')} } from '../dto/${
                model.name
              }.dto';`
            : ''
        }
        ${
          argsDeps.length
            ? `import { ${argsDeps.sort().join(', ')} } from '../arg/${
                model.name
              }.arg';`
            : ''
        }
         ${
           scalarDeps.length
             ? `import { ${scalarDeps.sort().join(', ')} } from '../scalar/${
                 model.name
               }.scalar';`
             : ''
         }
        ${uniq([
          `import { ${model.name} } from '../entities/${model.name}.entity';`,
          ...relationships
            .filter(field => content.includes(startCase(field.type)))
            .map(
              field =>
                `import { ${startCase(
                  field.type
                )} } from '../entities/${startCase(field.type)}.entity';`
            )
        ]).join('\n')}
        ${content}
      `
    );
  }
}
