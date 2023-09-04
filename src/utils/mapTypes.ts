import type { DMMF } from '@prisma/generator-helper';

const FieldGqlTypes = {
  Boolean: {
    from: false,
    value: 'Boolean'
  },
  Decimal: {
    from: '@nestjs/graphql',
    value: 'Float'
  },
  Float: {
    from: '@nestjs/graphql',
    value: 'Float'
  },
  BigInt: {
    from: 'graphql-scalars',
    value: 'GraphQLBigInt'
  },
  DateTime: {
    from: false,
    value: 'Date'
  },
  Int: {
    from: '@nestjs/graphql',
    value: 'Int'
  },
  Json: {
    from: 'graphql-scalars',
    value: 'GraphQLJSONObject'
  },
  String: {
    from: false,
    value: 'String'
  }
};

export function getGqlType(field: DMMF.Field) {
  return FieldGqlTypes[field.type]?.value ?? 'String';
}

const FieldTsTypes = {
  BigInt: 'number',
  Boolean: 'boolean',
  DateTime: 'Date',
  Decimal: 'number',
  Int: 'number',
  Json: 'Prisma.InputJsonValue',
  String: 'string',
  Float: 'number'
};

export const getTsType = (field: DMMF.Field) => {
  return field.type === 'JSON' && !field.isRequired
    ? `Prisma.JsonNull | ${FieldTsTypes[field.type]}`
    : FieldTsTypes[field.type];
};
