# prisma-generator-nestjs-graphql-crud

This prisma generator will create all the [@nestjs/graphql](https://docs.nestjs.com/graphql/quick-start)
classes you'll need for basic CRUD operations; based on your prisma schema.
It includes [dataloader](https://www.npmjs.com/package/dataloader) to prevent
the infamous **n+1** problem in graphql.

```bash
npm i prisma-generator-nestjs-graphql-crud
```

---

## Getting Started

1. Inside your prisma schema add the following:

```
generator nestJsGraphQlCrud {
  provider = "prisma-generator-nestjs-graphql-crud"
}
```

**Options:**

| Feature          | Description                                  | Default                           | Example                      |
|------------------|----------------------------------------------|-----------------------------------|------------------------------|
| excludes         | prisma model names to exclude from generator |                                   | `excludes = ["Ignore"]`      |
| includeMutations | include mutation resolvers                   |                                   | `includeMutations = "true"`  |
| output           | cwd relative path for the output             | `node_modules/@generated/graphql` | `output   = "./example/src"` |

2. Configure your Graphql Service In NestJs

The generated code relies on the `context` object for graphql to contain a
reference to the `prisma` client. See the use of `useFactory` in the `GraphQLModule` below.

**PrismaModule** and **PrismaService** are generated; if you want your own custom implementation,
use this [doc](https://github.com/mainfraame/prisma-generator-nestjs-graphql/tree/main/example/docs/PrismaModule.md) as
a guide.

_\*_ generated code is compatible
with [@nestjs/mercurius](https://www.npmjs.com/package/@nestjs/mercurius), [@nestjs/apollo](https://www.npmjs.com/package/@nestjs/apollo)
and [@graphql-yoga/nestjs](https://the-guild.dev/graphql/yoga-server/docs/integrations/integration-with-nestjs)

```typescript
import { PrismaModule, PrismaService, prismaProviders } from '@generated/graphql';
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
  providers: [...prismaProviders]
})
export class AppModule {
}
```

---

## Prisma Features

| Feature    | Available | Notes                                                               |
|------------|-----------|---------------------------------------------------------------------|
| create     | ✅         |                                                                     |
| createMany | ✅         |                                                                     |
| delete     | ✅         |                                                                     |
| deleteMany | ✅         |                                                                     |
| findUnique | ✅         | by primary key or composite keys                                    |
| findMany   | ✅         | pagination included (skip/take only for now)                        |
| filters    | ✅         | gt,gte,lt,lte,notIn,in,not, etc.  (DateTime, Int, String supported) |
| orderBy    | ✅         |                                                                     |
| update     | ✅         |                                                                     |
| updateMany | ✅         |                                                                     |

The following are the various filters and generated resolvers. Note the table name is **Upper-CamelCased**;
e.g. `user_session` would become `UserSession`.

- [Filters](#filters)
- [Resolvers](#resolvers)

---

## Resolvers

All the following are based on the example project
found [here](https://github.com/mainfraame/prisma-generator-nestjs-graphql/tree/main/example/src).

- [create](#createtable)
- [createMany](#createmanytable)
- [delete](#deletetable)
- [deleteMany](#deletemanytable)
- [findFirst](#findfirsttable)
- [findMany](#findmanytable)
- [findUnique](#finduniquetable)
- [update](#updatetable)
- [updateMany](#updatemanytable)

---

### create

Create a new entity. Here's an example:

```graphql
mutation {
    createTodo(title: "Next Todo", userId: 1) {
        id
        title
        userId
    }
}
```

This would return the following:

```json
{
  "data": {
    "createTodo": {
      "id": 6,
      "title": "Next Todo",
      "userId": 1
    }
  }
}
```

---

### createMany

Create multiple new entities. Here's an example:

```
mutation {
    createManyTodo([{"title": "Another Todo", "userId": 1}, {"title": "Final Todo", "userId": 2}]) {
        id
        title
        userId
    }
}
```

This would return the following:

```json
{
  "data": {
    "createManyTodo": [
      {
        "id": 7,
        "title": "Another Todo",
        "userId": 1
      },
      {
        "id": 8,
        "title": "Final Todo",
        "userId": 2
      }
    ]
  }
}
```

---

### delete

Delete an entity. Here's an example:

```graphql
mutation {
    deleteTodo(id: 1) {
        id
        title
        userId
    }
}
```

This would return the following:

```json
{
  "data": {
    "deleteTodo": {
      "id": 1,
      "title": "First Todo",
      "userId": 1
    }
  }
}
```

---

### deleteMany

Delete multiple entities. Here's an example:

```
mutation {
    deleteManyTodo(userId: 1) {
        id
        title
        userId
    }
}
```

This returns the list of deleted todos:

```json
{
  "data": {
    "deleteManyTodo": [
      {
        "id": 1,
        "title": "First Todo",
        "userId": 1
      },
      {
        "id": 2,
        "title": "Second Todo",
        "userId": 1
      }
    ]
  }
}
```

---

### findFirst

Find first should be used when you want to query and find a single row without using any of the unique keys for filters;
this means that any filters you use for a `findMany` can be used here. Here's an example:

```graphql
query {
    findFirstTodo(title: "That Todo") {
        id
        title
        userId
    }
}
```

This would return the following:

```json
{
  "data": {
    "findFirstTodo": {
      "id": 1,
      "title": "That Todo",
      "userId": 1
    }
  }
}
```

---

### findMany

Find many is used to return either filtered or unfiltered rows from a table, and can optionally provide `skip` (offset)
and `take` (limit) as parameters to control pagination. Here's an example:

```graphql
query {
    findManyTodo(skip: 0, take: 5) {
        id
        title
        userId
    }
}
```

This would return the following:

```json
{
  "data": {
    "findManyTodo": [
      {
        "id": 1,
        "title": "Todo 1",
        "userId": 1
      },
      {
        "id": 2,
        "title": "Todo 2",
        "userId": 1
      },
      {
        "id": 3,
        "title": "Todo 3",
        "userId": 1
      },
      {
        "id": 4,
        "title": "Todo 4",
        "userId": 2
      },
      {
        "id": 5,
        "title": "Todo 5",
        "userId": 2
      }
    ]
  }
}
```

---

### findUnique

Find unique should be used when you want to query against a primary key or composite key. Here's an example:

```graphql
query {
    findUniqueTodo(id: 1) {
        id
        title
        userId
    }
}
```

This would return the following:

```json
{
  "data": {
    "findUniqueTodo": {
      "id": 1,
      "title": "Todo 1",
      "userId": 1
    }
  }
}
```

---

### update

Updates a single entity. Here's an example:

```graphql
mutation {
    updateTodo(data: {"title": "First Todo", "userId": 2}, where: {"id": 1}) {
        id
        title
        userId
    }
}
```

This would return the following:

```json
{
  "data": {
    "updateTodo": {
      "id": 1,
      "title": "First Todo",
      "userId": 2
    }
  }
}
```

---

### updateMany

Updates a single entity. Here's an example:

```graphql
mutation {
    updateManyTodo(data: {"userId": 2}, where: {"userId": 1}) {
        id
        title
        userId
    }
}
```

This would return the following:

```json
{
  "data": {
    "updateManyTodo": [
      {
        "id": 1,
        "title": "First Todo",
        "userId": 2
      },
      {
        "id": 2,
        "title": "Second Todo",
        "userId": 2
      }
    ]
  }
}
```

---

## Filters

The following filters are available are:

- [DateFilter](#datefilter)
- [NumberFilter](#numberfilter)
- [OrderBy](#orderby)
- [Skip](#skip-offset)
- [StringFilter](#stringfilter)
- [Take](#take-limit)

---

### DateFilter

| Type       | Supported |
|------------|-----------|
| findFirst  | ✅         |
| findMany   | ✅         |
| findUnique | ❌         |

**Options**

| Type | Description                                                          | Example           |
|------|----------------------------------------------------------------------|-------------------|
| gt   | where the column value is greater than the given {value}             | gt: "2022-01-10"  |
| gte  | where the column value is greater than or equal to the given {value} | gte:"2022-01-10"  |
| lt   | where the column value is less than the given {value}                | lt: "2022-01-10"  |
| lte  | where the column value is less than or equal to the given {value}    | lte:"2022-01-10"  |
| not  | where the column value is not equal to the given {value}             | not: "2022-01-10" |

**Example:**

```graphql
query {
    findManyTodo(createdAt: { gt: "2022-01-10", lt: "2023-01-10" }) {
        id
        title
    }
}
```

---

### NumberFilter

| Type       | Supported |
|------------|-----------|
| findFirst  | ✅         |
| findMany   | ✅         |
| findUnique | ❌         |

**Options**

| Type | Description                                                          | Example |
|------|----------------------------------------------------------------------|---------|
| gt   | where the column value is greater than the given {value}             | gt: 1   |
| gte  | where the column value is greater than or equal to the given {value} | gte: 1  |
| lt   | where the column value is less than the given {value}                | lt: 1   |
| lte  | where the column value is less than or equal to the given {value}    | lte: 1  |
| not  | where the column value is not equal to the given {value}             | not: 1  |

**Example:**

```graphql
query {
    findManyTodo(userId: { gt: 1, lt: 2 }) {
        id
        title
        userId
    }
}
```

---

### OrderBy

| Type       | Supported |
|------------|-----------|
| findFirst  | ✅         |
| findMany   | ✅         |
| findUnique | ❌         |

**Example:**

```graphql
query {
    findManyTodo(skip: 0, take: 5, orderBy: {title: "desc"}) {
        id
        title
    }
}
```

---

### StringFilter

| Type       | Supported |
|------------|-----------|
| findFirst  | ✅         |
| findMany   | ✅         |
| findUnique | ❌         |

**Options**

| Type       | Description                                                               | Example                 |
|------------|---------------------------------------------------------------------------|-------------------------|
| contains   | where the column contains the given {value}                               | contains: "Robert"      |
| endsWith   | where the column value ends with the {value}                              | endsWith: "ert"         |
| in         | where the column contains a value matching the array of {values}s         | in:  ["Robert", "Rob"]  |
| not        | where the column value does not not equal the {value}                     | not: "Matt"             |
| notIn      | where the column does not contain a value matching the array of {values}s | notIn: ["robb", "Robb"] |
| startsWith | where the column value starts with the {value}                            | startsWith: "Rob"       |

*all are case-insensitive

**Example:**

```graphql
query {
    findManyTodo(title: { contains: "First" }) {
        id
        title
    }
}
```

---

### Skip (offset)

| Type       | Supported |
|------------|-----------|
| findFirst  | ❌         |
| findMany   | ✅         |
| findUnique | ❌         |

**Example:**

```graphql
query {
    findManyTodo(skip: 0) {
        id
        title
    }
}
```

---

### Take (limit)

| Type       | Supported |
|------------|-----------|
| findFirst  | ❌         |
| findMany   | ✅         |
| findUnique | ❌         |

**Example:**

```graphql
query {
    findManyTodo(take: 10) {
        id
        title
    }
}
```

___

## Graphql Features

| Feature        | Available | Notes                                    |
|----------------|-----------|------------------------------------------|
| FieldResolvers | ✅         | both up and down relationships supported |
| Mutations      | ✅         |                                          |
| Query          | ✅         |                                          |
| Resolvers      | ✅         |                                          |

---

## Example

See a generated example [here](https://github.com/mainfraame/prisma-generator-nestjs-graphql/tree/main/example/src);
note, when the output is in a node_modules directory, it will automatically transpile cjs and mjs versions.

---

## Road Map

- authentication guard integration
- cursor-based pagination
- expand `gt`, `gte`, `lt`, `lte`, `notIn`, `in`, `not` "where" filtering to types other than DateTime, Int, and String

## TODO

- fix `orderBy` ArgTypes casting to `Prisma.{Model}FindManyArgs['orderBy']`
- fix `data` ArgTypes casting to `Prisma.{Model}CreateArgs['data']`
- fix `where` ArgTypes casting to `Prisma.{Model}FindManyArgs['where']`
