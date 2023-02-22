import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateUserRolesSponsorDto,
  DeleteUserRolesSponsorDto,
  FindManyUserRolesSponsorDto,
  FindUniqueUserRolesSponsorDto,
  UpdateDataUserRolesSponsorDto,
  UpdateWhereUserRolesSponsorDto
} from '../dto/UserRolesSponsor.dto';
import { UserRolesSponsor } from '../entities/UserRolesSponsor.entity';

@Resolver(() => UserRolesSponsor)
export class UserRolesSponsorResolver {
  @Query(() => UserRolesSponsor)
  async getUserRolesSponsor(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueUserRolesSponsorDto })
    where: Prisma.UserRolesSponsorFindUniqueArgs['where']
  ) {
    return context.prisma.userRolesSponsor.findUnique({ where });
  }

  @Query(() => [UserRolesSponsor])
  async getAllUserRolesSponsors(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyUserRolesSponsorDto })
    where: Prisma.UserRolesSponsorFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.userRolesSponsor.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => UserRolesSponsor)
  async createUserRolesSponsor(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateUserRolesSponsorDto })
    data: Prisma.UserRolesSponsorCreateArgs['data']
  ) {
    return context.prisma.userRolesSponsor.create({ data });
  }

  @Mutation(() => UserRolesSponsor)
  async updateUserRolesSponsor(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereUserRolesSponsorDto })
    where: Prisma.UserRolesSponsorUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataUserRolesSponsorDto })
    data: Prisma.UserRolesSponsorUpdateArgs['data']
  ) {
    return context.prisma.userRolesSponsor.update({ where, data });
  }

  @Mutation(() => UserRolesSponsor)
  async removeUserRolesSponsor(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteUserRolesSponsorDto })
    where: Prisma.UserRolesSponsorDeleteArgs['where']
  ) {
    return context.prisma.userRolesSponsor.delete({ where });
  }
}
