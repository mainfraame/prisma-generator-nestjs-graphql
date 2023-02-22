import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateAuthTokenDto,
  DeleteAuthTokenDto,
  FindManyAuthTokenDto,
  FindUniqueAuthTokenDto,
  UpdateDataAuthTokenDto,
  UpdateWhereAuthTokenDto
} from '../dto/AuthToken.dto';
import { AuthToken } from '../entities/AuthToken.entity';

@Resolver(() => AuthToken)
export class AuthTokenResolver {
  @Query(() => AuthToken)
  async getAuthToken(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueAuthTokenDto })
    where: Prisma.AuthTokenFindUniqueArgs['where']
  ) {
    return context.prisma.authToken.findUnique({ where });
  }

  @Query(() => [AuthToken])
  async getAllAuthTokens(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyAuthTokenDto })
    where: Prisma.AuthTokenFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.authToken.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => AuthToken)
  async createAuthToken(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateAuthTokenDto })
    data: Prisma.AuthTokenCreateArgs['data']
  ) {
    return context.prisma.authToken.create({ data });
  }

  @Mutation(() => AuthToken)
  async updateAuthToken(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereAuthTokenDto })
    where: Prisma.AuthTokenUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataAuthTokenDto })
    data: Prisma.AuthTokenUpdateArgs['data']
  ) {
    return context.prisma.authToken.update({ where, data });
  }

  @Mutation(() => AuthToken)
  async removeAuthToken(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteAuthTokenDto })
    where: Prisma.AuthTokenDeleteArgs['where']
  ) {
    return context.prisma.authToken.delete({ where });
  }
}
