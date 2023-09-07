# prisma-generator-nestjs-graphql-crud

This prisma generator will create all the [@nestjs/graphql](https://docs.nestjs.com/graphql/quick-start)
classes you'll need for basic CRUD operations; based on your prisma schema.

```bash
npm i prisma-generator-nestjs-graphql-crud
```

---

#### Prisma Features

| Feature    | Available | Notes                                        |
|------------|-----------|----------------------------------------------|
| create     | ✅         |                                              |
| createMany | ✅         |                                              |
| delete     | ✅         |                                              |
| deleteMany | ✅         |                                              |
| findUnique | ✅         | by primary key or composite keys             |
| findMany   | ✅         | pagination included (skip/take only for now) |
| filters    | ❌         | gt,gte,lt,lte,notIn,in,not, etc.             |
| orderBy    | ✅         |                                              |
| update     | ✅         |                                              |
| updateMany | ✅         |                                              |

---

#### Graphql Features

| Feature        | Available | Notes                                    |
|----------------|-----------|------------------------------------------|
| FieldResolvers | ✅         | both up and down relationships supported |
| Mutations      | ✅         |                                          |
| Query          | ✅         |                                          |
| Resolvers      | ✅         |                                          |

---

### Getting Started

1. Inside your prisma schema add the following:

```
generator nestJsGraphQlCrud {
  provider = "prisma-generator-nestjs-graphql-crud"
}
```

**Options:**

| Feature  | Description                                  | Default                           | Example                      |
|----------|----------------------------------------------|-----------------------------------|------------------------------|
| excludes | prisma model names to exclude from generator |                                   | `excludes = ["Ignore"]`      |
| output   | cwd relative path for the output             | `node_modules/@generated/graphql` | `output   = "./example/src"` |

2. Configure your Graphql Service In NestJs

The generated code relies on the `context` object for graphql to contain a
reference to the `prisma` client. See the use of `useFactory` in the `GraphQLModule` below.

**PrismaModule** and **PrismaService** are generated; if you want your own custom implementation,
use this [doc](https://github.com/mainfraame/prisma-generator-nestjs-graphql/tree/main/example/docs/PrismaModule.md) as a guide.

_\*_ generated code is compatible
with [@nestjs/mercurius](https://www.npmjs.com/package/@nestjs/mercurius), [@nestjs/apollo](https://www.npmjs.com/package/@nestjs/apollo)
and [@graphql-yoga/nestjs](https://the-guild.dev/graphql/yoga-server/docs/integrations/integration-with-nestjs)

```typescript
import { PrismaModule, PrismaService, providers } from '@generated/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      inject: [PrismaService],
      useFactory: (prisma: PrismaService) => ({
        autoSchemaFile: 'schema.gql',
        context: {
          prisma
        },
        graphiql: true
      })
    }),
    PrismaModule.forRoot({
      isGlobal: true
    })
  ],
  providers: [...providers]
})
export class AppModule {
}
```

---

### Example

See a generated example [here](https://github.com/mainfraame/prisma-generator-nestjs-graphql/tree/main/example/src); note, when the output is in a node_modules directory,
it will automatically transpile cjs and mjs versions.

---

### Road Map

- authentication guard integration
- cursor-based pagination
- gt, gte, lt, lte, notIn, in, not "where" filtering

#### TODO

- fix `orderBy` ArgTypes casting to `Prisma.{Model}FindManyArgs['orderBy']`
- fix `data` ArgTypes casting to `Prisma.{Model}CreateArgs['data']`
- fix `where` ArgTypes casting to `Prisma.{Model}FindManyArgs['where']`
