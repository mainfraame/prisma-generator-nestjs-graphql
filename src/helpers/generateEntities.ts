import type { DMMF } from '@prisma/generator-helper';

import type { Settings } from '../types';
import { getGqlType, getTsType, writeFile } from '../utils';
import { generateDependencies } from './generateDependencies';
import { generateEnumDependencies } from './generateEnumDependencies';
import { getNonRelationFields } from './getNonRelationFields';

export async function generateEntities(
  models: DMMF.Model[],
  enums: Record<string, DMMF.DatamodelEnum>,
  settings: Settings
) {
  for (const model of models) {
    const content = `
    @ObjectType()
    export class ${model.name} {
      ${getNonRelationFields(model)
        .map(field => {
          const graphqlType = getGqlType(field);
          const tsType = getTsType(field);

          const optional = field.isRequired ? '' : '?';

          return `
          @Field(() => ${graphqlType}, { nullable: ${!field.isRequired} })\n${
            field.name
          }${optional}: ${enums[field.type] ? field.type : tsType}${
            field.isRequired ? '' : ' | null'
          };
        `;
        })
        .join('\n\n')}
    }`;

    await writeFile(
      `${settings.defaultOutput}/entities/${model.name}.entity.ts`,
      `
        ${generateDependencies(content)}
        ${generateEnumDependencies(content, enums)}
        ${content}
      `
    );
  }
}
