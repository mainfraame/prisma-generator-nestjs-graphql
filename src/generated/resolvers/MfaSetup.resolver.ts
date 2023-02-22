import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateMfaSetupDto,
  DeleteMfaSetupDto,
  FindManyMfaSetupDto,
  FindUniqueMfaSetupDto,
  UpdateDataMfaSetupDto,
  UpdateWhereMfaSetupDto
} from '../dto/MfaSetup.dto';
import { MfaSetup } from '../entities/MfaSetup.entity';

@Resolver(() => MfaSetup)
export class MfaSetupResolver {
  @Query(() => MfaSetup)
  async getMfaSetup(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueMfaSetupDto })
    where: Prisma.MfaSetupFindUniqueArgs['where']
  ) {
    return context.prisma.mfaSetup.findUnique({ where });
  }

  @Query(() => [MfaSetup])
  async getAllMfaSetups(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyMfaSetupDto })
    where: Prisma.MfaSetupFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.mfaSetup.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => MfaSetup)
  async createMfaSetup(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateMfaSetupDto })
    data: Prisma.MfaSetupCreateArgs['data']
  ) {
    return context.prisma.mfaSetup.create({ data });
  }

  @Mutation(() => MfaSetup)
  async updateMfaSetup(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereMfaSetupDto })
    where: Prisma.MfaSetupUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataMfaSetupDto })
    data: Prisma.MfaSetupUpdateArgs['data']
  ) {
    return context.prisma.mfaSetup.update({ where, data });
  }

  @Mutation(() => MfaSetup)
  async removeMfaSetup(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteMfaSetupDto })
    where: Prisma.MfaSetupDeleteArgs['where']
  ) {
    return context.prisma.mfaSetup.delete({ where });
  }
}
