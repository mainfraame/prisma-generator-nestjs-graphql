import { Context } from '@nestjs/graphql';

import { mapPrismaTypeToGraphQLType } from './mapPrismaTypeToGraphQlType';
import { mapPrismaTypeToTsType } from './mapPrismaTypeToTsType';

export function generateUpdateDataFields(fields, model) {
  return fields
    .filter((field) => !field.relationName)
    .filter((field) => !field.isId)
    .map((field) => {
      const graphqlType = mapPrismaTypeToGraphQLType(field.type);
      const tsType = mapPrismaTypeToTsType(field.type);

      return `@Field(() => ${graphqlType}, {nullable: ${
        field.isRequired ? 'false' : 'true'
      }})\n${field.name}${field.isRequired ? '' : '?'}: ${tsType};`;
    })
    .join('\n\n');
}
