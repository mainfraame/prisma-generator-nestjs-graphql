import { orderBy } from 'lodash';

import { mapPrismaTypeToGraphQLType } from './mapPrismaTypeToGraphQlType';
import { mapPrismaTypeToTsType } from './mapPrismaTypeToTsType';

export function generateFindManyFields(fields) {
  return orderBy(
    fields.filter((field) => !field.relationName),
    ['name']
  )
    .map((field) => {
      const graphqlType = mapPrismaTypeToGraphQLType(field.type);
      const tsType = mapPrismaTypeToTsType(field.type);

      return `@Field(() => ${graphqlType}, { nullable: true })\n${field.name}?: ${tsType};`;
    })
    .join('\n\n');
}
