export function generateDependencies(content: string) {
  const graphqlScalars = [
    'GraphQLBigInt',
    'GraphQLDateTime',
    'GraphQLJSONObject'
  ]
    .filter(i => content.includes(i))
    .join(', ');

  const prismaFilterArgs = [
    'DateFilterArg',
    'IntFilterArg',
    'StringFilterArg'
  ].filter(i => content.includes(i));

  const prismaFilterScalars = [
    'DateFilterScalar',
    'IntFilterScalar',
    'StringFilterScalar'
  ].filter(i => content.includes(i));

  const nestjsGraphql = [
    { name: 'ArgsType', lookup: '@ArgsType' },
    { name: 'InputType', lookup: '@InputType' },
    { name: 'ObjectType', lookup: '@ObjectType' },
    { name: 'Field', lookup: '@Field' },
    { name: 'Int', lookup: ' Int' },
    { name: 'Float', lookup: 'Float' },
    { name: 'Context', lookup: '@Context' },
    { name: 'ResolveField', lookup: '@ResolveField' },
    { name: 'Parent', lookup: '@Parent' },
    { name: 'Resolver', lookup: '@Resolver' },
    { name: 'Query', lookup: '@Query' },
    { name: 'Args', lookup: '@Args(' },
    { name: 'Mutation', lookup: '@Mutation' }
  ]
    .filter(d => content.includes(d.lookup))
    .map(d => d.name)
    .join(', ');

  const prisma = [
    { name: 'Prisma', lookup: 'Prisma.' },
    { name: 'PrismaClient', lookup: 'PrismaClient' }
  ]
    .filter(d => content.includes(d.lookup))
    .map(d => d.name)
    .join(', ');

  return [
    nestjsGraphql.length
      ? `import { ${nestjsGraphql} } from '@nestjs/graphql';`
      : '',
    prismaFilterArgs.map(d => `import { ${d} } from '../arg/${d}';`).join('\n'),
    prismaFilterScalars
      .map(d => `import { ${d} } from '../scalar/${d}';`)
      .join('\n'),
    prisma.length ? `import { ${prisma} } from '@prisma/client';` : '',
    graphqlScalars.length
      ? `import { ${graphqlScalars} } from 'graphql-scalars';`
      : ''
  ]
    .filter(Boolean)
    .join('\n');
}
