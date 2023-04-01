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

export function mapPrismaTypeToGraphQLType(prismaType) {
  return FieldGqlTypes[prismaType]?.value ?? 'String';
}
