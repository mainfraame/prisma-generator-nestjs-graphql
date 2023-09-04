import { Settings } from '../types';
import { writeFile } from '../utils';

export async function generatePrismaModule(settings: Settings) {
  await writeFile(
    `${settings.defaultOutput}/prisma/prisma.service.ts`,
    `
    import {
      Inject,
      Injectable,
      OnModuleDestroy,
      OnModuleInit,
      Optional
    } from '@nestjs/common';
    import { Prisma, PrismaClient } from '@prisma/client';
    
    @Injectable()
    export class PrismaService
      extends PrismaClient
      implements OnModuleInit, OnModuleDestroy
    {
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
    
      async onModuleDestroy() {
        await this.$disconnect();
      }
    }`
  );

  await writeFile(
    `${settings.defaultOutput}/prisma/prisma.module.ts`,
    `
    import { DynamicModule, Module } from '@nestjs/common';
    import { Prisma } from '@prisma/client';
    
    import { PrismaService } from './prisma.service';
    
    type PrismaModuleOptions = {
      /**
       * If "true", registers \`PrismaModule\` as a global module.
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
    `
  );
}
