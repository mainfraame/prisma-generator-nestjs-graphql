import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreatePsaDto,
  DeletePsaDto,
  FindManyPsaDto,
  FindUniquePsaDto,
  UpdateDataPsaDto,
  UpdateWherePsaDto
} from '../dto/Psa.dto';
import { Psa } from '../entities/Psa.entity';

@Resolver(() => Psa)
export class PsaResolver {
  @Query(() => Psa)
  async getPsa(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniquePsaDto })
    where: Prisma.PsaFindUniqueArgs['where']
  ) {
    return context.prisma.psa.findUnique({ where });
  }

  @Query(() => [Psa])
  async getAllPsas(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyPsaDto })
    where: Prisma.PsaFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.psa.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => Psa)
  async createPsa(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreatePsaDto })
    data: Prisma.PsaCreateArgs['data']
  ) {
    return context.prisma.psa.create({ data });
  }

  @Mutation(() => Psa)
  async updatePsa(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWherePsaDto })
    where: Prisma.PsaUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataPsaDto })
    data: Prisma.PsaUpdateArgs['data']
  ) {
    return context.prisma.psa.update({ where, data });
  }

  @Mutation(() => Psa)
  async removePsa(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeletePsaDto })
    where: Prisma.PsaDeleteArgs['where']
  ) {
    return context.prisma.psa.delete({ where });
  }
}
