import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreatePartnerSystemDto,
  DeletePartnerSystemDto,
  FindManyPartnerSystemDto,
  FindUniquePartnerSystemDto,
  UpdateDataPartnerSystemDto,
  UpdateWherePartnerSystemDto
} from '../dto/PartnerSystem.dto';
import { PartnerSystem } from '../entities/PartnerSystem.entity';

@Resolver(() => PartnerSystem)
export class PartnerSystemResolver {
  @Query(() => PartnerSystem)
  async getPartnerSystem(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniquePartnerSystemDto })
    where: Prisma.PartnerSystemFindUniqueArgs['where']
  ) {
    return context.prisma.partnerSystem.findUnique({ where });
  }

  @Query(() => [PartnerSystem])
  async getAllPartnerSystems(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyPartnerSystemDto })
    where: Prisma.PartnerSystemFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.partnerSystem.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => PartnerSystem)
  async createPartnerSystem(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreatePartnerSystemDto })
    data: Prisma.PartnerSystemCreateArgs['data']
  ) {
    return context.prisma.partnerSystem.create({ data });
  }

  @Mutation(() => PartnerSystem)
  async updatePartnerSystem(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWherePartnerSystemDto })
    where: Prisma.PartnerSystemUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataPartnerSystemDto })
    data: Prisma.PartnerSystemUpdateArgs['data']
  ) {
    return context.prisma.partnerSystem.update({ where, data });
  }

  @Mutation(() => PartnerSystem)
  async removePartnerSystem(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeletePartnerSystemDto })
    where: Prisma.PartnerSystemDeleteArgs['where']
  ) {
    return context.prisma.partnerSystem.delete({ where });
  }
}
