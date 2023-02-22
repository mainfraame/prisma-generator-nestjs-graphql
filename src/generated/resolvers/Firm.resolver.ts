import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateFirmDto,
  DeleteFirmDto,
  FindManyFirmDto,
  FindUniqueFirmDto,
  UpdateDataFirmDto,
  UpdateWhereFirmDto
} from '../dto/Firm.dto';
import { Firm } from '../entities/Firm.entity';

@Resolver(() => Firm)
export class FirmResolver {
  @Query(() => Firm)
  async getFirm(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueFirmDto })
    where: Prisma.FirmFindUniqueArgs['where']
  ) {
    return context.prisma.firm.findUnique({ where });
  }

  @Query(() => [Firm])
  async getAllFirms(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyFirmDto })
    where: Prisma.FirmFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.firm.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => Firm)
  async createFirm(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateFirmDto })
    data: Prisma.FirmCreateArgs['data']
  ) {
    return context.prisma.firm.create({ data });
  }

  @Mutation(() => Firm)
  async updateFirm(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereFirmDto })
    where: Prisma.FirmUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataFirmDto })
    data: Prisma.FirmUpdateArgs['data']
  ) {
    return context.prisma.firm.update({ where, data });
  }

  @Mutation(() => Firm)
  async removeFirm(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteFirmDto })
    where: Prisma.FirmDeleteArgs['where']
  ) {
    return context.prisma.firm.delete({ where });
  }
}
