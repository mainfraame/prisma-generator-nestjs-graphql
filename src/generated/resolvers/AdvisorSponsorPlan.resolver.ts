import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateAdvisorSponsorPlanDto,
  DeleteAdvisorSponsorPlanDto,
  FindManyAdvisorSponsorPlanDto,
  FindUniqueAdvisorSponsorPlanDto,
  UpdateDataAdvisorSponsorPlanDto,
  UpdateWhereAdvisorSponsorPlanDto
} from '../dto/AdvisorSponsorPlan.dto';
import { AdvisorSponsorPlan } from '../entities/AdvisorSponsorPlan.entity';

@Resolver(() => AdvisorSponsorPlan)
export class AdvisorSponsorPlanResolver {
  @Query(() => AdvisorSponsorPlan)
  async getAdvisorSponsorPlan(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueAdvisorSponsorPlanDto })
    where: Prisma.AdvisorSponsorPlanFindUniqueArgs['where']
  ) {
    return context.prisma.advisorSponsorPlan.findUnique({ where });
  }

  @Query(() => [AdvisorSponsorPlan])
  async getAllAdvisorSponsorPlans(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyAdvisorSponsorPlanDto })
    where: Prisma.AdvisorSponsorPlanFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.advisorSponsorPlan.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => AdvisorSponsorPlan)
  async createAdvisorSponsorPlan(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateAdvisorSponsorPlanDto })
    data: Prisma.AdvisorSponsorPlanCreateArgs['data']
  ) {
    return context.prisma.advisorSponsorPlan.create({ data });
  }

  @Mutation(() => AdvisorSponsorPlan)
  async updateAdvisorSponsorPlan(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereAdvisorSponsorPlanDto })
    where: Prisma.AdvisorSponsorPlanUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataAdvisorSponsorPlanDto })
    data: Prisma.AdvisorSponsorPlanUpdateArgs['data']
  ) {
    return context.prisma.advisorSponsorPlan.update({ where, data });
  }

  @Mutation(() => AdvisorSponsorPlan)
  async removeAdvisorSponsorPlan(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteAdvisorSponsorPlanDto })
    where: Prisma.AdvisorSponsorPlanDeleteArgs['where']
  ) {
    return context.prisma.advisorSponsorPlan.delete({ where });
  }
}
