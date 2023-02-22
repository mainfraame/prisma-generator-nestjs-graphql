import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateUserMfaAttemptDto,
  DeleteUserMfaAttemptDto,
  FindManyUserMfaAttemptDto,
  FindUniqueUserMfaAttemptDto,
  UpdateDataUserMfaAttemptDto,
  UpdateWhereUserMfaAttemptDto
} from '../dto/UserMfaAttempt.dto';
import { UserMfaAttempt } from '../entities/UserMfaAttempt.entity';

@Resolver(() => UserMfaAttempt)
export class UserMfaAttemptResolver {
  @Query(() => UserMfaAttempt)
  async getUserMfaAttempt(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueUserMfaAttemptDto })
    where: Prisma.UserMfaAttemptFindUniqueArgs['where']
  ) {
    return context.prisma.userMfaAttempt.findUnique({ where });
  }

  @Query(() => [UserMfaAttempt])
  async getAllUserMfaAttempts(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyUserMfaAttemptDto })
    where: Prisma.UserMfaAttemptFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.userMfaAttempt.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => UserMfaAttempt)
  async createUserMfaAttempt(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateUserMfaAttemptDto })
    data: Prisma.UserMfaAttemptCreateArgs['data']
  ) {
    return context.prisma.userMfaAttempt.create({ data });
  }

  @Mutation(() => UserMfaAttempt)
  async updateUserMfaAttempt(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereUserMfaAttemptDto })
    where: Prisma.UserMfaAttemptUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataUserMfaAttemptDto })
    data: Prisma.UserMfaAttemptUpdateArgs['data']
  ) {
    return context.prisma.userMfaAttempt.update({ where, data });
  }

  @Mutation(() => UserMfaAttempt)
  async removeUserMfaAttempt(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteUserMfaAttemptDto })
    where: Prisma.UserMfaAttemptDeleteArgs['where']
  ) {
    return context.prisma.userMfaAttempt.delete({ where });
  }
}
