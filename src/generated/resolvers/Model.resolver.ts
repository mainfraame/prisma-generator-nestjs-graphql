import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateModelDto,
  DeleteModelDto,
  FindManyModelDto,
  FindUniqueModelDto,
  UpdateDataModelDto,
  UpdateWhereModelDto
} from '../dto/Model.dto';
import { Model } from '../entities/Model.entity';

@Resolver(() => Model)
export class ModelResolver {
  @Query(() => Model)
  async getModel(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueModelDto })
    where: Prisma.ModelFindUniqueArgs['where']
  ) {
    return context.prisma.model.findUnique({ where });
  }

  @Query(() => [Model])
  async getAllModels(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyModelDto })
    where: Prisma.ModelFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.model.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => Model)
  async createModel(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateModelDto })
    data: Prisma.ModelCreateArgs['data']
  ) {
    return context.prisma.model.create({ data });
  }

  @Mutation(() => Model)
  async updateModel(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereModelDto })
    where: Prisma.ModelUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataModelDto })
    data: Prisma.ModelUpdateArgs['data']
  ) {
    return context.prisma.model.update({ where, data });
  }

  @Mutation(() => Model)
  async removeModel(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteModelDto })
    where: Prisma.ModelDeleteArgs['where']
  ) {
    return context.prisma.model.delete({ where });
  }
}
