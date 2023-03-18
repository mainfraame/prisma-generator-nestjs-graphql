# prisma-generator-nestjs-graphql-crud

This prisma generator will create all the [@nestjs/graphql](https://docs.nestjs.com/graphql/quick-start)
classes you'll need for basic CRUD operations; based on your prisma schema.

```bash
npm i prisma-generator-nestjs-graphql-crud
```

| Feature    | Available | Notes                                        |
|------------|-----------|----------------------------------------------|
| Create     | ✅         |                                              |
| CreateMany | ❌         |                                              |
| Delete     | ✅         |                                              |
| DeleteMany | ❌         |                                              |
| Get (one)  | ✅         | by primary key                               |
| Get (many) | ✅         | pagination included (skip/take only for now) |
| Update     | ✅         |                                              |
| UpdateMany | ❌         |                                              |

### Getting Started

1. Inside your prisma schema add the following:

```
generator nestJsGraphQlCrud {
  provider = "prisma-generator-nestjs-graphql-crud"
}
```

The output will be generated to:

```
node_modules/@generated/graphql
```

2. Create a nestjs module that adds the generated providers (can be existing):

`/path/to/resolves.module.ts`

```typescript
import { resolvers } from '@generated/graphql';

@Module({
  providers: [...resolvers]
})
export class ResolversModule {}
```

3. If you don't already have one, create a PrismaModule w/ export PrismaService

`/path/to/prisma.service.ts`

```typescript
import { Inject, Injectable, OnModuleInit, Optional } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(
    @Optional()
    @Inject('PRISMA_SERVICE_OPTIONS')
    private readonly prismaServiceOptions: Prisma.PrismaClientOptions = {}
  ) {
    super(prismaServiceOptions);
  }

  async onModuleInit() {
    await this.$connect();
  }

  async beforeApplicationShutdown() {
    await this.$disconnect();
  }
}
```

`/path/to/prisma.module.ts`

```typescript
import { DynamicModule, Module } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from './prisma.service';

type PrismaModuleOptions = {
  /**
   * If "true", registers `PrismaModule` as a global module.
   * See: https://docs.nestjs.com/modules#global-modules
   */
  isGlobal?: boolean;
  prismaServiceOptions?: Prisma.PrismaClientOptions;
};

@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {
  static forRoot(options: PrismaModuleOptions = {}): DynamicModule {
    return {
      global: options.isGlobal,
      module: PrismaModule,
      providers: [
        {
          provide: 'PRISMA_SERVICE_OPTIONS',
          useValue: options.prismaServiceOptions
        }
      ]
    };
  }
}
```

4. Import the resolvers from the generated package & add them to a nestjs module (can be existing):

`/path/to/resolves.module.ts`

```typescript
import { resolvers } from '@generated/graphql';

@Module({
  providers: [...resolvers]
})
export class ResolversModule {}
```

5. Configure your Graphql Service In NestJs

The generated code relies on the `context` object for graphql to contain a
reference to the `prisma` client. See the use of `useFactory` in the `GraphQLModule` below.

_\*_ highly
recommend [@graphql-yoga/nestjs](https://the-guild.dev/graphql/yoga-server/docs/integrations/integration-with-nestjs),
but
the generated code is still compatible with [@nestjs/mercurius](https://www.npmjs.com/package/@nestjs/mercurius)
and [@nestjs/apollo](https://www.npmjs.com/package/@nestjs/apollo)

```typescript
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { PrismaModule } from './path/to/prisma.module';
import { ResolversModule } from './path/to/resolves.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync<YogaDriverConfig>({
      driver: YogaDriver,
      useFactory: async (prisma: PrismaService) => ({
        autoSchemaFile: 'schema.gql',
        context: {
          prisma
        },
        graphiql: true
      }),
      inject: [PrismaService]
    }),
    PrismaModule.forRoot({
      isGlobal: true
    }),
    ResolversModule
  ]
})
export class AppModule {}
```

---

### Example

See our this [doc](https://github.com/mainfraame/prisma-generator-nestjs-graphql/blob/main/docs/Example.md) for an
example output

---

### Road Map

- generate parent resolvers
- custom scalar type support
- create / delete / update / many support
- cursor-based pagination
- authentication guard integration
