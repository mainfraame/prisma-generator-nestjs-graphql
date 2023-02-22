import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateUserDto,
  DeleteUserDto,
  FindManyUserDto,
  FindUniqueUserDto,
  UpdateDataUserDto,
  UpdateWhereUserDto
} from '../dto/User.dto';
import { User } from '../entities/User.entity';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  async getUser(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueUserDto })
    where: Prisma.UserFindUniqueArgs['where']
  ) {
    return context.prisma.user.findUnique({ where });
  }

  @Query(() => [User])
  async getAllUsers(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyUserDto })
    where: Prisma.UserFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.user.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => User)
  async createUser(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateUserDto })
    data: Prisma.UserCreateArgs['data']
  ) {
    return context.prisma.user.create({ data });
  }

  @Mutation(() => User)
  async updateUser(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereUserDto })
    where: Prisma.UserUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataUserDto })
    data: Prisma.UserUpdateArgs['data']
  ) {
    return context.prisma.user.update({ where, data });
  }

  @Mutation(() => User)
  async removeUser(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteUserDto })
    where: Prisma.UserDeleteArgs['where']
  ) {
    return context.prisma.user.delete({ where });
  }
}
