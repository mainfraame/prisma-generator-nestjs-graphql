import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateSharedEntityTypeDto,
  DeleteSharedEntityTypeDto,
  FindManySharedEntityTypeDto,
  FindUniqueSharedEntityTypeDto,
  UpdateDataSharedEntityTypeDto,
  UpdateWhereSharedEntityTypeDto
} from '../dto/SharedEntityType.dto';
import { SharedEntityType } from '../entities/SharedEntityType.entity';

@Resolver(() => SharedEntityType)
export class SharedEntityTypeResolver {
  @Query(() => SharedEntityType)
  async getSharedEntityType(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueSharedEntityTypeDto })
    where: Prisma.SharedEntityTypeFindUniqueArgs['where']
  ) {
    return context.prisma.sharedEntityType.findUnique({ where });
  }

  @Query(() => [SharedEntityType])
  async getAllSharedEntityTypes(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManySharedEntityTypeDto })
    where: Prisma.SharedEntityTypeFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.sharedEntityType.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => SharedEntityType)
  async createSharedEntityType(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateSharedEntityTypeDto })
    data: Prisma.SharedEntityTypeCreateArgs['data']
  ) {
    return context.prisma.sharedEntityType.create({ data });
  }

  @Mutation(() => SharedEntityType)
  async updateSharedEntityType(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereSharedEntityTypeDto })
    where: Prisma.SharedEntityTypeUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataSharedEntityTypeDto })
    data: Prisma.SharedEntityTypeUpdateArgs['data']
  ) {
    return context.prisma.sharedEntityType.update({ where, data });
  }

  @Mutation(() => SharedEntityType)
  async removeSharedEntityType(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteSharedEntityTypeDto })
    where: Prisma.SharedEntityTypeDeleteArgs['where']
  ) {
    return context.prisma.sharedEntityType.delete({ where });
  }
}
