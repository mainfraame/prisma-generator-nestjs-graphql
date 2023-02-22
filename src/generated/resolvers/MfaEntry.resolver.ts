import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateMfaEntryDto,
  DeleteMfaEntryDto,
  FindManyMfaEntryDto,
  FindUniqueMfaEntryDto,
  UpdateDataMfaEntryDto,
  UpdateWhereMfaEntryDto
} from '../dto/MfaEntry.dto';
import { MfaEntry } from '../entities/MfaEntry.entity';

@Resolver(() => MfaEntry)
export class MfaEntryResolver {
  @Query(() => MfaEntry)
  async getMfaEntry(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueMfaEntryDto })
    where: Prisma.MfaEntryFindUniqueArgs['where']
  ) {
    return context.prisma.mfaEntry.findUnique({ where });
  }

  @Query(() => [MfaEntry])
  async getAllMfaEntrys(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyMfaEntryDto })
    where: Prisma.MfaEntryFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.mfaEntry.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => MfaEntry)
  async createMfaEntry(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateMfaEntryDto })
    data: Prisma.MfaEntryCreateArgs['data']
  ) {
    return context.prisma.mfaEntry.create({ data });
  }

  @Mutation(() => MfaEntry)
  async updateMfaEntry(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereMfaEntryDto })
    where: Prisma.MfaEntryUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataMfaEntryDto })
    data: Prisma.MfaEntryUpdateArgs['data']
  ) {
    return context.prisma.mfaEntry.update({ where, data });
  }

  @Mutation(() => MfaEntry)
  async removeMfaEntry(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteMfaEntryDto })
    where: Prisma.MfaEntryDeleteArgs['where']
  ) {
    return context.prisma.mfaEntry.delete({ where });
  }
}
