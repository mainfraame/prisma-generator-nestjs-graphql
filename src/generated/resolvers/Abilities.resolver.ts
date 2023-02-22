import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateAbilitiesDto,
  DeleteAbilitiesDto,
  FindManyAbilitiesDto,
  FindUniqueAbilitiesDto,
  UpdateDataAbilitiesDto,
  UpdateWhereAbilitiesDto
} from '../dto/Abilities.dto';
import { Abilities } from '../entities/Abilities.entity';

@Resolver(() => Abilities)
export class AbilitiesResolver {
  @Query(() => Abilities)
  async getAbilities(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueAbilitiesDto })
    where: Prisma.AbilitiesFindUniqueArgs['where']
  ) {
    return context.prisma.abilities.findUnique({ where });
  }

  @Query(() => [Abilities])
  async getAllAbilities(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyAbilitiesDto })
    where: Prisma.AbilitiesFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.abilities.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => Abilities)
  async createAbilities(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateAbilitiesDto })
    data: Prisma.AbilitiesCreateArgs['data']
  ) {
    return context.prisma.abilities.create({ data });
  }

  @Mutation(() => Abilities)
  async updateAbilities(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereAbilitiesDto })
    where: Prisma.AbilitiesUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataAbilitiesDto })
    data: Prisma.AbilitiesUpdateArgs['data']
  ) {
    return context.prisma.abilities.update({ where, data });
  }

  @Mutation(() => Abilities)
  async removeAbilities(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteAbilitiesDto })
    where: Prisma.AbilitiesDeleteArgs['where']
  ) {
    return context.prisma.abilities.delete({ where });
  }
}
