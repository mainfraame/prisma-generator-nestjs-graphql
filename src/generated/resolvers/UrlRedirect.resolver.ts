import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateUrlRedirectDto,
  DeleteUrlRedirectDto,
  FindManyUrlRedirectDto,
  FindUniqueUrlRedirectDto,
  UpdateDataUrlRedirectDto,
  UpdateWhereUrlRedirectDto
} from '../dto/UrlRedirect.dto';
import { UrlRedirect } from '../entities/UrlRedirect.entity';

@Resolver(() => UrlRedirect)
export class UrlRedirectResolver {
  @Query(() => UrlRedirect)
  async getUrlRedirect(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueUrlRedirectDto })
    where: Prisma.UrlRedirectFindUniqueArgs['where']
  ) {
    return context.prisma.urlRedirect.findUnique({ where });
  }

  @Query(() => [UrlRedirect])
  async getAllUrlRedirects(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyUrlRedirectDto })
    where: Prisma.UrlRedirectFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.urlRedirect.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => UrlRedirect)
  async createUrlRedirect(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateUrlRedirectDto })
    data: Prisma.UrlRedirectCreateArgs['data']
  ) {
    return context.prisma.urlRedirect.create({ data });
  }

  @Mutation(() => UrlRedirect)
  async updateUrlRedirect(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereUrlRedirectDto })
    where: Prisma.UrlRedirectUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataUrlRedirectDto })
    data: Prisma.UrlRedirectUpdateArgs['data']
  ) {
    return context.prisma.urlRedirect.update({ where, data });
  }

  @Mutation(() => UrlRedirect)
  async removeUrlRedirect(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteUrlRedirectDto })
    where: Prisma.UrlRedirectDeleteArgs['where']
  ) {
    return context.prisma.urlRedirect.delete({ where });
  }
}
