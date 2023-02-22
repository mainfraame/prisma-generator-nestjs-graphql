import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreatePartnerSystemMappingDto,
  DeletePartnerSystemMappingDto,
  FindManyPartnerSystemMappingDto,
  FindUniquePartnerSystemMappingDto,
  UpdateDataPartnerSystemMappingDto,
  UpdateWherePartnerSystemMappingDto
} from '../dto/PartnerSystemMapping.dto';
import { PartnerSystemMapping } from '../entities/PartnerSystemMapping.entity';

@Resolver(() => PartnerSystemMapping)
export class PartnerSystemMappingResolver {
  @Query(() => PartnerSystemMapping)
  async getPartnerSystemMapping(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniquePartnerSystemMappingDto })
    where: Prisma.PartnerSystemMappingFindUniqueArgs['where']
  ) {
    return context.prisma.partnerSystemMapping.findUnique({ where });
  }

  @Query(() => [PartnerSystemMapping])
  async getAllPartnerSystemMappings(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyPartnerSystemMappingDto })
    where: Prisma.PartnerSystemMappingFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.partnerSystemMapping.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => PartnerSystemMapping)
  async createPartnerSystemMapping(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreatePartnerSystemMappingDto })
    data: Prisma.PartnerSystemMappingCreateArgs['data']
  ) {
    return context.prisma.partnerSystemMapping.create({ data });
  }

  @Mutation(() => PartnerSystemMapping)
  async updatePartnerSystemMapping(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWherePartnerSystemMappingDto })
    where: Prisma.PartnerSystemMappingUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataPartnerSystemMappingDto })
    data: Prisma.PartnerSystemMappingUpdateArgs['data']
  ) {
    return context.prisma.partnerSystemMapping.update({ where, data });
  }

  @Mutation(() => PartnerSystemMapping)
  async removePartnerSystemMapping(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeletePartnerSystemMappingDto })
    where: Prisma.PartnerSystemMappingDeleteArgs['where']
  ) {
    return context.prisma.partnerSystemMapping.delete({ where });
  }
}
