import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateAdvisorRegistrationStatusDto,
  DeleteAdvisorRegistrationStatusDto,
  FindManyAdvisorRegistrationStatusDto,
  FindUniqueAdvisorRegistrationStatusDto,
  UpdateDataAdvisorRegistrationStatusDto,
  UpdateWhereAdvisorRegistrationStatusDto
} from '../dto/AdvisorRegistrationStatus.dto';
import { AdvisorRegistrationStatus } from '../entities/AdvisorRegistrationStatus.entity';

@Resolver(() => AdvisorRegistrationStatus)
export class AdvisorRegistrationStatusResolver {
  @Query(() => AdvisorRegistrationStatus)
  async getAdvisorRegistrationStatus(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueAdvisorRegistrationStatusDto })
    where: Prisma.AdvisorRegistrationStatusFindUniqueArgs['where']
  ) {
    return context.prisma.advisorRegistrationStatus.findUnique({ where });
  }

  @Query(() => [AdvisorRegistrationStatus])
  async getAllAdvisorRegistrationStatus(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyAdvisorRegistrationStatusDto })
    where: Prisma.AdvisorRegistrationStatusFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.advisorRegistrationStatus.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => AdvisorRegistrationStatus)
  async createAdvisorRegistrationStatus(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateAdvisorRegistrationStatusDto })
    data: Prisma.AdvisorRegistrationStatusCreateArgs['data']
  ) {
    return context.prisma.advisorRegistrationStatus.create({ data });
  }

  @Mutation(() => AdvisorRegistrationStatus)
  async updateAdvisorRegistrationStatus(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereAdvisorRegistrationStatusDto })
    where: Prisma.AdvisorRegistrationStatusUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataAdvisorRegistrationStatusDto })
    data: Prisma.AdvisorRegistrationStatusUpdateArgs['data']
  ) {
    return context.prisma.advisorRegistrationStatus.update({ where, data });
  }

  @Mutation(() => AdvisorRegistrationStatus)
  async removeAdvisorRegistrationStatus(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteAdvisorRegistrationStatusDto })
    where: Prisma.AdvisorRegistrationStatusDeleteArgs['where']
  ) {
    return context.prisma.advisorRegistrationStatus.delete({ where });
  }
}
