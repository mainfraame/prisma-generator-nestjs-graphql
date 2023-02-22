import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateStatefulSchemaTrackingDto,
  DeleteStatefulSchemaTrackingDto,
  FindManyStatefulSchemaTrackingDto,
  FindUniqueStatefulSchemaTrackingDto,
  UpdateDataStatefulSchemaTrackingDto,
  UpdateWhereStatefulSchemaTrackingDto
} from '../dto/StatefulSchemaTracking.dto';
import { StatefulSchemaTracking } from '../entities/StatefulSchemaTracking.entity';

@Resolver(() => StatefulSchemaTracking)
export class StatefulSchemaTrackingResolver {
  @Query(() => StatefulSchemaTracking)
  async getStatefulSchemaTracking(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueStatefulSchemaTrackingDto })
    where: Prisma.StatefulSchemaTrackingFindUniqueArgs['where']
  ) {
    return context.prisma.statefulSchemaTracking.findUnique({ where });
  }

  @Query(() => [StatefulSchemaTracking])
  async getAllStatefulSchemaTrackings(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyStatefulSchemaTrackingDto })
    where: Prisma.StatefulSchemaTrackingFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.statefulSchemaTracking.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => StatefulSchemaTracking)
  async createStatefulSchemaTracking(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateStatefulSchemaTrackingDto })
    data: Prisma.StatefulSchemaTrackingCreateArgs['data']
  ) {
    return context.prisma.statefulSchemaTracking.create({ data });
  }

  @Mutation(() => StatefulSchemaTracking)
  async updateStatefulSchemaTracking(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereStatefulSchemaTrackingDto })
    where: Prisma.StatefulSchemaTrackingUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataStatefulSchemaTrackingDto })
    data: Prisma.StatefulSchemaTrackingUpdateArgs['data']
  ) {
    return context.prisma.statefulSchemaTracking.update({ where, data });
  }

  @Mutation(() => StatefulSchemaTracking)
  async removeStatefulSchemaTracking(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteStatefulSchemaTrackingDto })
    where: Prisma.StatefulSchemaTrackingDeleteArgs['where']
  ) {
    return context.prisma.statefulSchemaTracking.delete({ where });
  }
}
