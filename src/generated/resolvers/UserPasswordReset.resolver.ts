import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateUserPasswordResetDto,
  DeleteUserPasswordResetDto,
  FindManyUserPasswordResetDto,
  FindUniqueUserPasswordResetDto,
  UpdateDataUserPasswordResetDto,
  UpdateWhereUserPasswordResetDto
} from '../dto/UserPasswordReset.dto';
import { UserPasswordReset } from '../entities/UserPasswordReset.entity';

@Resolver(() => UserPasswordReset)
export class UserPasswordResetResolver {
  @Query(() => UserPasswordReset)
  async getUserPasswordReset(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueUserPasswordResetDto })
    where: Prisma.UserPasswordResetFindUniqueArgs['where']
  ) {
    return context.prisma.userPasswordReset.findUnique({ where });
  }

  @Query(() => [UserPasswordReset])
  async getAllUserPasswordResets(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyUserPasswordResetDto })
    where: Prisma.UserPasswordResetFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.userPasswordReset.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => UserPasswordReset)
  async createUserPasswordReset(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateUserPasswordResetDto })
    data: Prisma.UserPasswordResetCreateArgs['data']
  ) {
    return context.prisma.userPasswordReset.create({ data });
  }

  @Mutation(() => UserPasswordReset)
  async updateUserPasswordReset(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereUserPasswordResetDto })
    where: Prisma.UserPasswordResetUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataUserPasswordResetDto })
    data: Prisma.UserPasswordResetUpdateArgs['data']
  ) {
    return context.prisma.userPasswordReset.update({ where, data });
  }

  @Mutation(() => UserPasswordReset)
  async removeUserPasswordReset(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteUserPasswordResetDto })
    where: Prisma.UserPasswordResetDeleteArgs['where']
  ) {
    return context.prisma.userPasswordReset.delete({ where });
  }
}
