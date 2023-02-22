import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateUserRolesParticipantDto,
  DeleteUserRolesParticipantDto,
  FindManyUserRolesParticipantDto,
  FindUniqueUserRolesParticipantDto,
  UpdateDataUserRolesParticipantDto,
  UpdateWhereUserRolesParticipantDto
} from '../dto/UserRolesParticipant.dto';
import { UserRolesParticipant } from '../entities/UserRolesParticipant.entity';

@Resolver(() => UserRolesParticipant)
export class UserRolesParticipantResolver {
  @Query(() => UserRolesParticipant)
  async getUserRolesParticipant(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueUserRolesParticipantDto })
    where: Prisma.UserRolesParticipantFindUniqueArgs['where']
  ) {
    return context.prisma.userRolesParticipant.findUnique({ where });
  }

  @Query(() => [UserRolesParticipant])
  async getAllUserRolesParticipants(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyUserRolesParticipantDto })
    where: Prisma.UserRolesParticipantFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.userRolesParticipant.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => UserRolesParticipant)
  async createUserRolesParticipant(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateUserRolesParticipantDto })
    data: Prisma.UserRolesParticipantCreateArgs['data']
  ) {
    return context.prisma.userRolesParticipant.create({ data });
  }

  @Mutation(() => UserRolesParticipant)
  async updateUserRolesParticipant(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereUserRolesParticipantDto })
    where: Prisma.UserRolesParticipantUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataUserRolesParticipantDto })
    data: Prisma.UserRolesParticipantUpdateArgs['data']
  ) {
    return context.prisma.userRolesParticipant.update({ where, data });
  }

  @Mutation(() => UserRolesParticipant)
  async removeUserRolesParticipant(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteUserRolesParticipantDto })
    where: Prisma.UserRolesParticipantDeleteArgs['where']
  ) {
    return context.prisma.userRolesParticipant.delete({ where });
  }
}
