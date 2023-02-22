import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateCensusRecordsDto,
  DeleteCensusRecordsDto,
  FindManyCensusRecordsDto,
  FindUniqueCensusRecordsDto,
  UpdateDataCensusRecordsDto,
  UpdateWhereCensusRecordsDto
} from '../dto/CensusRecords.dto';
import { CensusRecords } from '../entities/CensusRecords.entity';

@Resolver(() => CensusRecords)
export class CensusRecordsResolver {
  @Query(() => CensusRecords)
  async getCensusRecords(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueCensusRecordsDto })
    where: Prisma.CensusRecordsFindUniqueArgs['where']
  ) {
    return context.prisma.censusRecords.findUnique({ where });
  }

  @Query(() => [CensusRecords])
  async getAllCensusRecords(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyCensusRecordsDto })
    where: Prisma.CensusRecordsFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.censusRecords.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => CensusRecords)
  async createCensusRecords(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateCensusRecordsDto })
    data: Prisma.CensusRecordsCreateArgs['data']
  ) {
    return context.prisma.censusRecords.create({ data });
  }

  @Mutation(() => CensusRecords)
  async updateCensusRecords(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereCensusRecordsDto })
    where: Prisma.CensusRecordsUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataCensusRecordsDto })
    data: Prisma.CensusRecordsUpdateArgs['data']
  ) {
    return context.prisma.censusRecords.update({ where, data });
  }

  @Mutation(() => CensusRecords)
  async removeCensusRecords(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteCensusRecordsDto })
    where: Prisma.CensusRecordsDeleteArgs['where']
  ) {
    return context.prisma.censusRecords.delete({ where });
  }
}
