import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateProgramDto,
  DeleteProgramDto,
  FindManyProgramDto,
  FindUniqueProgramDto,
  UpdateDataProgramDto,
  UpdateWhereProgramDto
} from '../dto/Program.dto';
import { Program } from '../entities/Program.entity';

@Resolver(() => Program)
export class ProgramResolver {
  @Query(() => Program)
  async getProgram(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueProgramDto })
    where: Prisma.ProgramFindUniqueArgs['where']
  ) {
    return context.prisma.program.findUnique({ where });
  }

  @Query(() => [Program])
  async getAllPrograms(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyProgramDto })
    where: Prisma.ProgramFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.program.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => Program)
  async createProgram(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateProgramDto })
    data: Prisma.ProgramCreateArgs['data']
  ) {
    return context.prisma.program.create({ data });
  }

  @Mutation(() => Program)
  async updateProgram(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereProgramDto })
    where: Prisma.ProgramUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataProgramDto })
    data: Prisma.ProgramUpdateArgs['data']
  ) {
    return context.prisma.program.update({ where, data });
  }

  @Mutation(() => Program)
  async removeProgram(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteProgramDto })
    where: Prisma.ProgramDeleteArgs['where']
  ) {
    return context.prisma.program.delete({ where });
  }
}
