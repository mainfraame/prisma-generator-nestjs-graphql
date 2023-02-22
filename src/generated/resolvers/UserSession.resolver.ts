import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateUserSessionDto,
  DeleteUserSessionDto,
  FindManyUserSessionDto,
  FindUniqueUserSessionDto,
  UpdateDataUserSessionDto,
  UpdateWhereUserSessionDto
} from '../dto/UserSession.dto';
import { UserSession } from '../entities/UserSession.entity';

@Resolver(() => UserSession)
export class UserSessionResolver {
  @Query(() => UserSession)
  async getUserSession(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueUserSessionDto })
    where: Prisma.UserSessionFindUniqueArgs['where']
  ) {
    return context.prisma.userSession.findUnique({ where });
  }

  @Query(() => [UserSession])
  async getAllUserSessions(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyUserSessionDto })
    where: Prisma.UserSessionFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.userSession.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => UserSession)
  async createUserSession(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateUserSessionDto })
    data: Prisma.UserSessionCreateArgs['data']
  ) {
    return context.prisma.userSession.create({ data });
  }

  @Mutation(() => UserSession)
  async updateUserSession(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereUserSessionDto })
    where: Prisma.UserSessionUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataUserSessionDto })
    data: Prisma.UserSessionUpdateArgs['data']
  ) {
    return context.prisma.userSession.update({ where, data });
  }

  @Mutation(() => UserSession)
  async removeUserSession(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteUserSessionDto })
    where: Prisma.UserSessionDeleteArgs['where']
  ) {
    return context.prisma.userSession.delete({ where });
  }
}
