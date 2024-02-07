import { DynamicModule, Module } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { DataLoaderService } from './dataLoader.service';
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
  providers: [DataLoaderService, PrismaService],
  exports: [DataLoaderService, PrismaService]
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
