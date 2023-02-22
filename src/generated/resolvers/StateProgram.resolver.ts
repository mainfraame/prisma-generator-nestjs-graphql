import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateStateProgramDto,
  DeleteStateProgramDto,
  FindManyStateProgramDto,
  FindUniqueStateProgramDto,
  UpdateDataStateProgramDto,
  UpdateWhereStateProgramDto
} from '../dto/StateProgram.dto';
import { StateProgram } from '../entities/StateProgram.entity';

@Resolver(() => StateProgram)
export class StateProgramResolver {
  @Query(() => StateProgram)
  async getStateProgram(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueStateProgramDto })
    where: Prisma.StateProgramFindUniqueArgs['where']
  ) {
    return context.prisma.stateProgram.findUnique({ where });
  }

  @Query(() => [StateProgram])
  async getAllStatePrograms(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyStateProgramDto })
    where: Prisma.StateProgramFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.stateProgram.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => StateProgram)
  async createStateProgram(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateStateProgramDto })
    data: Prisma.StateProgramCreateArgs['data']
  ) {
    return context.prisma.stateProgram.create({ data });
  }

  @Mutation(() => StateProgram)
  async updateStateProgram(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereStateProgramDto })
    where: Prisma.StateProgramUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataStateProgramDto })
    data: Prisma.StateProgramUpdateArgs['data']
  ) {
    return context.prisma.stateProgram.update({ where, data });
  }

  @Mutation(() => StateProgram)
  async removeStateProgram(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteStateProgramDto })
    where: Prisma.StateProgramDeleteArgs['where']
  ) {
    return context.prisma.stateProgram.delete({ where });
  }
}
