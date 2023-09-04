# PrismaModule

In order to wire up the PrismaClient to the graphql resolvers, you need to create a `PrismaModule` and `PrismaService`.
The generated package (`@generated/graphql`) contains both of these references for you, but if you need some customization
use the following as a base for building the module and service.

`prisma.service.ts`

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

`prisma.module.ts`

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

