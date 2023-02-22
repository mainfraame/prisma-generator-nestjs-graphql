import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateFeatureToggleLocalDto,
  DeleteFeatureToggleLocalDto,
  FindManyFeatureToggleLocalDto,
  FindUniqueFeatureToggleLocalDto,
  UpdateDataFeatureToggleLocalDto,
  UpdateWhereFeatureToggleLocalDto
} from '../dto/FeatureToggleLocal.dto';
import { FeatureToggleLocal } from '../entities/FeatureToggleLocal.entity';

@Resolver(() => FeatureToggleLocal)
export class FeatureToggleLocalResolver {
  @Query(() => FeatureToggleLocal)
  async getFeatureToggleLocal(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueFeatureToggleLocalDto })
    where: Prisma.FeatureToggleLocalFindUniqueArgs['where']
  ) {
    return context.prisma.featureToggleLocal.findUnique({ where });
  }

  @Query(() => [FeatureToggleLocal])
  async getAllFeatureToggleLocals(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyFeatureToggleLocalDto })
    where: Prisma.FeatureToggleLocalFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.featureToggleLocal.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => FeatureToggleLocal)
  async createFeatureToggleLocal(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateFeatureToggleLocalDto })
    data: Prisma.FeatureToggleLocalCreateArgs['data']
  ) {
    return context.prisma.featureToggleLocal.create({ data });
  }

  @Mutation(() => FeatureToggleLocal)
  async updateFeatureToggleLocal(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereFeatureToggleLocalDto })
    where: Prisma.FeatureToggleLocalUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataFeatureToggleLocalDto })
    data: Prisma.FeatureToggleLocalUpdateArgs['data']
  ) {
    return context.prisma.featureToggleLocal.update({ where, data });
  }

  @Mutation(() => FeatureToggleLocal)
  async removeFeatureToggleLocal(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteFeatureToggleLocalDto })
    where: Prisma.FeatureToggleLocalDeleteArgs['where']
  ) {
    return context.prisma.featureToggleLocal.delete({ where });
  }
}
