import type { DMMF } from '@prisma/generator-helper';

import { getGqlType, getTsType } from '../utils';
import { getUniqueFields } from './getUniqueFields';

export function generateFindUniqueFields(
  model: DMMF.Model,
  enums: Record<string, DMMF.DatamodelEnum>
) {
  return getUniqueFields(model)
    .map(field => {
      const graphqlType = getGqlType(field);
      const tsType = getTsType(field);

      return `
      @Field(() => ${graphqlType}, { nullable: false })
      ${field.name}: ${enums[field.type] ? field.type : tsType};
      `;
    })
    .join('\n\n');
}
