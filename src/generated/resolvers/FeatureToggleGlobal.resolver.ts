import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateFeatureToggleGlobalDto,
  DeleteFeatureToggleGlobalDto,
  FindManyFeatureToggleGlobalDto,
  FindUniqueFeatureToggleGlobalDto,
  UpdateDataFeatureToggleGlobalDto,
  UpdateWhereFeatureToggleGlobalDto
} from '../dto/FeatureToggleGlobal.dto';
import { FeatureToggleGlobal } from '../entities/FeatureToggleGlobal.entity';

@Resolver(() => FeatureToggleGlobal)
export class FeatureToggleGlobalResolver {
  @Query(() => FeatureToggleGlobal)
  async getFeatureToggleGlobal(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueFeatureToggleGlobalDto })
    where: Prisma.FeatureToggleGlobalFindUniqueArgs['where']
  ) {
    return context.prisma.featureToggleGlobal.findUnique({ where });
  }

  @Query(() => [FeatureToggleGlobal])
  async getAllFeatureToggleGlobals(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyFeatureToggleGlobalDto })
    where: Prisma.FeatureToggleGlobalFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.featureToggleGlobal.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => FeatureToggleGlobal)
  async createFeatureToggleGlobal(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateFeatureToggleGlobalDto })
    data: Prisma.FeatureToggleGlobalCreateArgs['data']
  ) {
    return context.prisma.featureToggleGlobal.create({ data });
  }

  @Mutation(() => FeatureToggleGlobal)
  async updateFeatureToggleGlobal(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereFeatureToggleGlobalDto })
    where: Prisma.FeatureToggleGlobalUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataFeatureToggleGlobalDto })
    data: Prisma.FeatureToggleGlobalUpdateArgs['data']
  ) {
    return context.prisma.featureToggleGlobal.update({ where, data });
  }

  @Mutation(() => FeatureToggleGlobal)
  async removeFeatureToggleGlobal(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteFeatureToggleGlobalDto })
    where: Prisma.FeatureToggleGlobalDeleteArgs['where']
  ) {
    return context.prisma.featureToggleGlobal.delete({ where });
  }
}
