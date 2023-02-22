import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateRecordkeeperDto,
  DeleteRecordkeeperDto,
  FindManyRecordkeeperDto,
  FindUniqueRecordkeeperDto,
  UpdateDataRecordkeeperDto,
  UpdateWhereRecordkeeperDto
} from '../dto/Recordkeeper.dto';
import { Recordkeeper } from '../entities/Recordkeeper.entity';

@Resolver(() => Recordkeeper)
export class RecordkeeperResolver {
  @Query(() => Recordkeeper)
  async getRecordkeeper(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueRecordkeeperDto })
    where: Prisma.RecordkeeperFindUniqueArgs['where']
  ) {
    return context.prisma.recordkeeper.findUnique({ where });
  }

  @Query(() => [Recordkeeper])
  async getAllRecordkeepers(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyRecordkeeperDto })
    where: Prisma.RecordkeeperFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.recordkeeper.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => Recordkeeper)
  async createRecordkeeper(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateRecordkeeperDto })
    data: Prisma.RecordkeeperCreateArgs['data']
  ) {
    return context.prisma.recordkeeper.create({ data });
  }

  @Mutation(() => Recordkeeper)
  async updateRecordkeeper(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereRecordkeeperDto })
    where: Prisma.RecordkeeperUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataRecordkeeperDto })
    data: Prisma.RecordkeeperUpdateArgs['data']
  ) {
    return context.prisma.recordkeeper.update({ where, data });
  }

  @Mutation(() => Recordkeeper)
  async removeRecordkeeper(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteRecordkeeperDto })
    where: Prisma.RecordkeeperDeleteArgs['where']
  ) {
    return context.prisma.recordkeeper.delete({ where });
  }
}
