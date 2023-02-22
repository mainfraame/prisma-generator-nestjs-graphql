import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateSponsorPlanDto,
  DeleteSponsorPlanDto,
  FindManySponsorPlanDto,
  FindUniqueSponsorPlanDto,
  UpdateDataSponsorPlanDto,
  UpdateWhereSponsorPlanDto
} from '../dto/SponsorPlan.dto';
import { SponsorPlan } from '../entities/SponsorPlan.entity';

@Resolver(() => SponsorPlan)
export class SponsorPlanResolver {
  @Query(() => SponsorPlan)
  async getSponsorPlan(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueSponsorPlanDto })
    where: Prisma.SponsorPlanFindUniqueArgs['where']
  ) {
    return context.prisma.sponsorPlan.findUnique({ where });
  }

  @Query(() => [SponsorPlan])
  async getAllSponsorPlans(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManySponsorPlanDto })
    where: Prisma.SponsorPlanFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.sponsorPlan.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => SponsorPlan)
  async createSponsorPlan(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateSponsorPlanDto })
    data: Prisma.SponsorPlanCreateArgs['data']
  ) {
    return context.prisma.sponsorPlan.create({ data });
  }

  @Mutation(() => SponsorPlan)
  async updateSponsorPlan(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereSponsorPlanDto })
    where: Prisma.SponsorPlanUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataSponsorPlanDto })
    data: Prisma.SponsorPlanUpdateArgs['data']
  ) {
    return context.prisma.sponsorPlan.update({ where, data });
  }

  @Mutation(() => SponsorPlan)
  async removeSponsorPlan(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteSponsorPlanDto })
    where: Prisma.SponsorPlanDeleteArgs['where']
  ) {
    return context.prisma.sponsorPlan.delete({ where });
  }
}
