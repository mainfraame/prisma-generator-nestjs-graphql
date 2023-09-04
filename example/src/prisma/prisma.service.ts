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
}
