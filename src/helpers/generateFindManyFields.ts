import type { DMMF } from '@prisma/generator-helper';

import { getArgTsType, getGqlArgType } from '../utils';
import { getNonRelationFields } from './getNonRelationFields';

export function generateFindManyFields(
  model: DMMF.Model,
  enums: Record<string, DMMF.DatamodelEnum>
) {
  return getNonRelationFields(model)
    .map(field => {
      const graphqlType = getGqlArgType(field);
      const tsType = getArgTsType(field);

      return `
        @Field(() => ${graphqlType}, { nullable: true })
        ${field.name}?: ${enums[field.type] ? field.type : tsType};
      `;
    })
    .join('\n\n');
}
