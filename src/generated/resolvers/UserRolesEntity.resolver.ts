import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateUserRolesEntityDto,
  DeleteUserRolesEntityDto,
  FindManyUserRolesEntityDto,
  FindUniqueUserRolesEntityDto,
  UpdateDataUserRolesEntityDto,
  UpdateWhereUserRolesEntityDto
} from '../dto/UserRolesEntity.dto';
import { UserRolesEntity } from '../entities/UserRolesEntity.entity';

@Resolver(() => UserRolesEntity)
export class UserRolesEntityResolver {
  @Query(() => UserRolesEntity)
  async getUserRolesEntity(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueUserRolesEntityDto })
    where: Prisma.UserRolesEntityFindUniqueArgs['where']
  ) {
    return context.prisma.userRolesEntity.findUnique({ where });
  }

  @Query(() => [UserRolesEntity])
  async getAllUserRolesEntitys(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyUserRolesEntityDto })
    where: Prisma.UserRolesEntityFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.userRolesEntity.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => UserRolesEntity)
  async createUserRolesEntity(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateUserRolesEntityDto })
    data: Prisma.UserRolesEntityCreateArgs['data']
  ) {
    return context.prisma.userRolesEntity.create({ data });
  }

  @Mutation(() => UserRolesEntity)
  async updateUserRolesEntity(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereUserRolesEntityDto })
    where: Prisma.UserRolesEntityUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataUserRolesEntityDto })
    data: Prisma.UserRolesEntityUpdateArgs['data']
  ) {
    return context.prisma.userRolesEntity.update({ where, data });
  }

  @Mutation(() => UserRolesEntity)
  async removeUserRolesEntity(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteUserRolesEntityDto })
    where: Prisma.UserRolesEntityDeleteArgs['where']
  ) {
    return context.prisma.userRolesEntity.delete({ where });
  }
}
