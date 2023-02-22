import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateSponsorDto,
  DeleteSponsorDto,
  FindManySponsorDto,
  FindUniqueSponsorDto,
  UpdateDataSponsorDto,
  UpdateWhereSponsorDto
} from '../dto/Sponsor.dto';
import { Sponsor } from '../entities/Sponsor.entity';

@Resolver(() => Sponsor)
export class SponsorResolver {
  @Query(() => Sponsor)
  async getSponsor(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueSponsorDto })
    where: Prisma.SponsorFindUniqueArgs['where']
  ) {
    return context.prisma.sponsor.findUnique({ where });
  }

  @Query(() => [Sponsor])
  async getAllSponsors(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManySponsorDto })
    where: Prisma.SponsorFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.sponsor.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => Sponsor)
  async createSponsor(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateSponsorDto })
    data: Prisma.SponsorCreateArgs['data']
  ) {
    return context.prisma.sponsor.create({ data });
  }

  @Mutation(() => Sponsor)
  async updateSponsor(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereSponsorDto })
    where: Prisma.SponsorUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataSponsorDto })
    data: Prisma.SponsorUpdateArgs['data']
  ) {
    return context.prisma.sponsor.update({ where, data });
  }

  @Mutation(() => Sponsor)
  async removeSponsor(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteSponsorDto })
    where: Prisma.SponsorDeleteArgs['where']
  ) {
    return context.prisma.sponsor.delete({ where });
  }
}
