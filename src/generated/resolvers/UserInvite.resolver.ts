import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateUserInviteDto,
  DeleteUserInviteDto,
  FindManyUserInviteDto,
  FindUniqueUserInviteDto,
  UpdateDataUserInviteDto,
  UpdateWhereUserInviteDto
} from '../dto/UserInvite.dto';
import { UserInvite } from '../entities/UserInvite.entity';

@Resolver(() => UserInvite)
export class UserInviteResolver {
  @Query(() => UserInvite)
  async getUserInvite(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueUserInviteDto })
    where: Prisma.UserInviteFindUniqueArgs['where']
  ) {
    return context.prisma.userInvite.findUnique({ where });
  }

  @Query(() => [UserInvite])
  async getAllUserInvites(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyUserInviteDto })
    where: Prisma.UserInviteFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.userInvite.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => UserInvite)
  async createUserInvite(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateUserInviteDto })
    data: Prisma.UserInviteCreateArgs['data']
  ) {
    return context.prisma.userInvite.create({ data });
  }

  @Mutation(() => UserInvite)
  async updateUserInvite(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereUserInviteDto })
    where: Prisma.UserInviteUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataUserInviteDto })
    data: Prisma.UserInviteUpdateArgs['data']
  ) {
    return context.prisma.userInvite.update({ where, data });
  }

  @Mutation(() => UserInvite)
  async removeUserInvite(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteUserInviteDto })
    where: Prisma.UserInviteDeleteArgs['where']
  ) {
    return context.prisma.userInvite.delete({ where });
  }
}
