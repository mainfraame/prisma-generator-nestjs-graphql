import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateSponsorActivationDto,
  DeleteSponsorActivationDto,
  FindManySponsorActivationDto,
  FindUniqueSponsorActivationDto,
  UpdateDataSponsorActivationDto,
  UpdateWhereSponsorActivationDto
} from '../dto/SponsorActivation.dto';
import { SponsorActivation } from '../entities/SponsorActivation.entity';

@Resolver(() => SponsorActivation)
export class SponsorActivationResolver {
  @Query(() => SponsorActivation)
  async getSponsorActivation(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueSponsorActivationDto })
    where: Prisma.SponsorActivationFindUniqueArgs['where']
  ) {
    return context.prisma.sponsorActivation.findUnique({ where });
  }

  @Query(() => [SponsorActivation])
  async getAllSponsorActivations(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManySponsorActivationDto })
    where: Prisma.SponsorActivationFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.sponsorActivation.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => SponsorActivation)
  async createSponsorActivation(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateSponsorActivationDto })
    data: Prisma.SponsorActivationCreateArgs['data']
  ) {
    return context.prisma.sponsorActivation.create({ data });
  }

  @Mutation(() => SponsorActivation)
  async updateSponsorActivation(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereSponsorActivationDto })
    where: Prisma.SponsorActivationUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataSponsorActivationDto })
    data: Prisma.SponsorActivationUpdateArgs['data']
  ) {
    return context.prisma.sponsorActivation.update({ where, data });
  }

  @Mutation(() => SponsorActivation)
  async removeSponsorActivation(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteSponsorActivationDto })
    where: Prisma.SponsorActivationDeleteArgs['where']
  ) {
    return context.prisma.sponsorActivation.delete({ where });
  }
}
