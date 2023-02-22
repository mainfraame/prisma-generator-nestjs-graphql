import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateSponsorPlanModelDto,
  DeleteSponsorPlanModelDto,
  FindManySponsorPlanModelDto,
  FindUniqueSponsorPlanModelDto,
  UpdateDataSponsorPlanModelDto,
  UpdateWhereSponsorPlanModelDto
} from '../dto/SponsorPlanModel.dto';
import { SponsorPlanModel } from '../entities/SponsorPlanModel.entity';

@Resolver(() => SponsorPlanModel)
export class SponsorPlanModelResolver {
  @Query(() => SponsorPlanModel)
  async getSponsorPlanModel(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueSponsorPlanModelDto })
    where: Prisma.SponsorPlanModelFindUniqueArgs['where']
  ) {
    return context.prisma.sponsorPlanModel.findUnique({ where });
  }

  @Query(() => [SponsorPlanModel])
  async getAllSponsorPlanModels(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManySponsorPlanModelDto })
    where: Prisma.SponsorPlanModelFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.sponsorPlanModel.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => SponsorPlanModel)
  async createSponsorPlanModel(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateSponsorPlanModelDto })
    data: Prisma.SponsorPlanModelCreateArgs['data']
  ) {
    return context.prisma.sponsorPlanModel.create({ data });
  }

  @Mutation(() => SponsorPlanModel)
  async updateSponsorPlanModel(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereSponsorPlanModelDto })
    where: Prisma.SponsorPlanModelUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataSponsorPlanModelDto })
    data: Prisma.SponsorPlanModelUpdateArgs['data']
  ) {
    return context.prisma.sponsorPlanModel.update({ where, data });
  }

  @Mutation(() => SponsorPlanModel)
  async removeSponsorPlanModel(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteSponsorPlanModelDto })
    where: Prisma.SponsorPlanModelDeleteArgs['where']
  ) {
    return context.prisma.sponsorPlanModel.delete({ where });
  }
}
