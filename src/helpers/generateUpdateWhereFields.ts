import type { DMMF } from '@prisma/generator-helper';

import { getGqlType, getTsType } from '../utils';
import { getUpdateWhereFields } from './getUpdateWhereFields';

export function generateUpdateWhereFields(
  model: DMMF.Model,
  enums: Record<string, DMMF.DatamodelEnum>
) {
  return getUpdateWhereFields(model)
    .map(field => {
      const graphqlType = getGqlType(field);
      const tsType = getTsType(field);

      return `@Field(() => ${graphqlType}, { nullable: false })\n${
        field.name
      }: ${enums[field.type] ? field.type : tsType};`;
    })
    .join('\n\n');
}
