import type { DMMF } from '@prisma/generator-helper';

import { getGqlType, getTsType } from '../utils';
import { getNonRelationFields } from './getNonRelationFields';

export function generateCreateFields(
  model: DMMF.Model,
  enums: Record<string, DMMF.DatamodelEnum>
) {
  return getNonRelationFields(model)
    .map(field => {
      const graphqlType = getGqlType(field);
      const tsType = getTsType(field);

      return `
        @Field(() => ${graphqlType}, { nullable: ${
          field.isRequired ? 'false' : 'true'
        } })
        ${field.name}${field.isRequired ? '' : '?'}: ${
          enums[field.type] ? field.type : tsType
        }${field.isRequired ? '' : ' | null'};
      `;
    })
    .join('\n\n');
}
