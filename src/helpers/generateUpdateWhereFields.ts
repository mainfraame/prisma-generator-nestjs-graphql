import { orderBy } from 'lodash';

import { mapPrismaTypeToGraphQLType } from './mapPrismaTypeToGraphQlType';
import { mapPrismaTypeToTsType } from './mapPrismaTypeToTsType';

export function generateUpdateWhereFields(fields, model) {
  const parsedFields = orderBy(
    fields.filter((field) => !field.relationName).filter((field) => field.isId),
    ['name']
  );

  const finalFields = parsedFields.length
    ? parsedFields
    : orderBy(
        (model.primaryKey?.fields ?? []).map((field) =>
          fields.find(({ name }) => name === field)
        ),
        ['name']
      );

  return finalFields
    .map((field) => {
      const graphqlType = mapPrismaTypeToGraphQLType(field.type);
      const tsType = mapPrismaTypeToTsType(field.type);

      return `@Field(() => ${graphqlType}, { nullable: false })\n${field.name}: ${tsType};`;
    })
    .join('\n\n');
}
