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

const ArgFieldGqlTypes = {
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
    value: 'DateFilterScalar'
  },
  Int: {
    from: '@nestjs/graphql',
    value: 'IntFilterScalar'
  },
  Json: {
    from: 'graphql-scalars',
    value: 'GraphQLJSONObject'
  },
  String: {
    from: false,
    value: 'StringFilterScalar'
  }
};

export function getGqlType(field: DMMF.Field) {
  return FieldGqlTypes[field.type]?.value ?? 'String';
}

export function getGqlArgType(field: DMMF.Field) {
  return ArgFieldGqlTypes[field.type]?.value ?? 'String';
}

export const fieldTsTypes = {
  BigInt: 'number',
  Boolean: 'boolean',
  DateTime: 'Date',
  Decimal: 'number',
  Int: 'number',
  Json: 'Prisma.InputJsonValue',
  String: 'string',
  Float: 'number'
};

const argfieldTsTypes = {
  BigInt: 'number',
  Boolean: 'boolean',
  DateTime: 'Date | DateFilterScalar',
  Decimal: 'number',
  Int: 'number | IntFilterScalar',
  Json: 'Prisma.InputJsonValue',
  String: 'string | StringFilterScalar',
  Float: 'number'
};

export const getTsType = (field: DMMF.Field) => {
  return field.type === 'JSON' && !field.isRequired
    ? `Prisma.JsonNull | ${fieldTsTypes[field.type]}`
    : fieldTsTypes[field.type];
};

export const getArgTsType = (field: DMMF.Field) => {
  return field.type === 'JSON' && !field.isRequired
    ? `Prisma.JsonNull | ${argfieldTsTypes[field.type]}`
    : argfieldTsTypes[field.type];
};
