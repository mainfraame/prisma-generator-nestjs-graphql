import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateUserRolesAdvisorDto,
  DeleteUserRolesAdvisorDto,
  FindManyUserRolesAdvisorDto,
  FindUniqueUserRolesAdvisorDto,
  UpdateDataUserRolesAdvisorDto,
  UpdateWhereUserRolesAdvisorDto
} from '../dto/UserRolesAdvisor.dto';
import { UserRolesAdvisor } from '../entities/UserRolesAdvisor.entity';

@Resolver(() => UserRolesAdvisor)
export class UserRolesAdvisorResolver {
  @Query(() => UserRolesAdvisor)
  async getUserRolesAdvisor(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueUserRolesAdvisorDto })
    where: Prisma.UserRolesAdvisorFindUniqueArgs['where']
  ) {
    return context.prisma.userRolesAdvisor.findUnique({ where });
  }

  @Query(() => [UserRolesAdvisor])
  async getAllUserRolesAdvisors(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyUserRolesAdvisorDto })
    where: Prisma.UserRolesAdvisorFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.userRolesAdvisor.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => UserRolesAdvisor)
  async createUserRolesAdvisor(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateUserRolesAdvisorDto })
    data: Prisma.UserRolesAdvisorCreateArgs['data']
  ) {
    return context.prisma.userRolesAdvisor.create({ data });
  }

  @Mutation(() => UserRolesAdvisor)
  async updateUserRolesAdvisor(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereUserRolesAdvisorDto })
    where: Prisma.UserRolesAdvisorUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataUserRolesAdvisorDto })
    data: Prisma.UserRolesAdvisorUpdateArgs['data']
  ) {
    return context.prisma.userRolesAdvisor.update({ where, data });
  }

  @Mutation(() => UserRolesAdvisor)
  async removeUserRolesAdvisor(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteUserRolesAdvisorDto })
    where: Prisma.UserRolesAdvisorDeleteArgs['where']
  ) {
    return context.prisma.userRolesAdvisor.delete({ where });
  }
}
