import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateSponsorExemptionDto,
  DeleteSponsorExemptionDto,
  FindManySponsorExemptionDto,
  FindUniqueSponsorExemptionDto,
  UpdateDataSponsorExemptionDto,
  UpdateWhereSponsorExemptionDto
} from '../dto/SponsorExemption.dto';
import { SponsorExemption } from '../entities/SponsorExemption.entity';

@Resolver(() => SponsorExemption)
export class SponsorExemptionResolver {
  @Query(() => SponsorExemption)
  async getSponsorExemption(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueSponsorExemptionDto })
    where: Prisma.SponsorExemptionFindUniqueArgs['where']
  ) {
    return context.prisma.sponsorExemption.findUnique({ where });
  }

  @Query(() => [SponsorExemption])
  async getAllSponsorExemptions(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManySponsorExemptionDto })
    where: Prisma.SponsorExemptionFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.sponsorExemption.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => SponsorExemption)
  async createSponsorExemption(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateSponsorExemptionDto })
    data: Prisma.SponsorExemptionCreateArgs['data']
  ) {
    return context.prisma.sponsorExemption.create({ data });
  }

  @Mutation(() => SponsorExemption)
  async updateSponsorExemption(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereSponsorExemptionDto })
    where: Prisma.SponsorExemptionUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataSponsorExemptionDto })
    data: Prisma.SponsorExemptionUpdateArgs['data']
  ) {
    return context.prisma.sponsorExemption.update({ where, data });
  }

  @Mutation(() => SponsorExemption)
  async removeSponsorExemption(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteSponsorExemptionDto })
    where: Prisma.SponsorExemptionDeleteArgs['where']
  ) {
    return context.prisma.sponsorExemption.delete({ where });
  }
}
