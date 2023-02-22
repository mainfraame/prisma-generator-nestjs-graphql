import { mapPrismaTypeToGraphQLType } from './mapPrismaTypeToGraphQlType';
import { mapPrismaTypeToTsType } from './mapPrismaTypeToTsType';

export function generateEntityField(field) {
  const graphqlType = mapPrismaTypeToGraphQLType(field.type);

  const tsType = mapPrismaTypeToTsType(field.type);

  const optional = field.isRequired ? '' : '?';

  return `@Field(() => ${graphqlType}, { nullable: ${!field.isRequired} })\n${
    field.name
  }${optional}: ${tsType};`;
}
