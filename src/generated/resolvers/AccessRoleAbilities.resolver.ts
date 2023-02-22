import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateAccessRoleAbilitiesDto,
  DeleteAccessRoleAbilitiesDto,
  FindManyAccessRoleAbilitiesDto,
  FindUniqueAccessRoleAbilitiesDto,
  UpdateDataAccessRoleAbilitiesDto,
  UpdateWhereAccessRoleAbilitiesDto
} from '../dto/AccessRoleAbilities.dto';
import { AccessRoleAbilities } from '../entities/AccessRoleAbilities.entity';

@Resolver(() => AccessRoleAbilities)
export class AccessRoleAbilitiesResolver {
  @Query(() => AccessRoleAbilities)
  async getAccessRoleAbilities(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueAccessRoleAbilitiesDto })
    where: Prisma.AccessRoleAbilitiesFindUniqueArgs['where']
  ) {
    return context.prisma.accessRoleAbilities.findUnique({ where });
  }

  @Query(() => [AccessRoleAbilities])
  async getAllAccessRoleAbilities(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyAccessRoleAbilitiesDto })
    where: Prisma.AccessRoleAbilitiesFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.accessRoleAbilities.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => AccessRoleAbilities)
  async createAccessRoleAbilities(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateAccessRoleAbilitiesDto })
    data: Prisma.AccessRoleAbilitiesCreateArgs['data']
  ) {
    return context.prisma.accessRoleAbilities.create({ data });
  }

  @Mutation(() => AccessRoleAbilities)
  async updateAccessRoleAbilities(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereAccessRoleAbilitiesDto })
    where: Prisma.AccessRoleAbilitiesUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataAccessRoleAbilitiesDto })
    data: Prisma.AccessRoleAbilitiesUpdateArgs['data']
  ) {
    return context.prisma.accessRoleAbilities.update({ where, data });
  }

  @Mutation(() => AccessRoleAbilities)
  async removeAccessRoleAbilities(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteAccessRoleAbilitiesDto })
    where: Prisma.AccessRoleAbilitiesDeleteArgs['where']
  ) {
    return context.prisma.accessRoleAbilities.delete({ where });
  }
}
