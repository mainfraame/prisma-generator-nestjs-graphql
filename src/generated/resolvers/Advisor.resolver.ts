import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateAdvisorDto,
  DeleteAdvisorDto,
  FindManyAdvisorDto,
  FindUniqueAdvisorDto,
  UpdateDataAdvisorDto,
  UpdateWhereAdvisorDto
} from '../dto/Advisor.dto';
import { Advisor } from '../entities/Advisor.entity';

@Resolver(() => Advisor)
export class AdvisorResolver {
  @Query(() => Advisor)
  async getAdvisor(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueAdvisorDto })
    where: Prisma.AdvisorFindUniqueArgs['where']
  ) {
    return context.prisma.advisor.findUnique({ where });
  }

  @Query(() => [Advisor])
  async getAllAdvisors(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyAdvisorDto })
    where: Prisma.AdvisorFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.advisor.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => Advisor)
  async createAdvisor(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateAdvisorDto })
    data: Prisma.AdvisorCreateArgs['data']
  ) {
    return context.prisma.advisor.create({ data });
  }

  @Mutation(() => Advisor)
  async updateAdvisor(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereAdvisorDto })
    where: Prisma.AdvisorUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataAdvisorDto })
    data: Prisma.AdvisorUpdateArgs['data']
  ) {
    return context.prisma.advisor.update({ where, data });
  }

  @Mutation(() => Advisor)
  async removeAdvisor(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteAdvisorDto })
    where: Prisma.AdvisorDeleteArgs['where']
  ) {
    return context.prisma.advisor.delete({ where });
  }
}
