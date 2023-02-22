import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateEmailWhiteLabelDto,
  DeleteEmailWhiteLabelDto,
  FindManyEmailWhiteLabelDto,
  FindUniqueEmailWhiteLabelDto,
  UpdateDataEmailWhiteLabelDto,
  UpdateWhereEmailWhiteLabelDto
} from '../dto/EmailWhiteLabel.dto';
import { EmailWhiteLabel } from '../entities/EmailWhiteLabel.entity';

@Resolver(() => EmailWhiteLabel)
export class EmailWhiteLabelResolver {
  @Query(() => EmailWhiteLabel)
  async getEmailWhiteLabel(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueEmailWhiteLabelDto })
    where: Prisma.EmailWhiteLabelFindUniqueArgs['where']
  ) {
    return context.prisma.emailWhiteLabel.findUnique({ where });
  }

  @Query(() => [EmailWhiteLabel])
  async getAllEmailWhiteLabels(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyEmailWhiteLabelDto })
    where: Prisma.EmailWhiteLabelFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.emailWhiteLabel.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => EmailWhiteLabel)
  async createEmailWhiteLabel(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateEmailWhiteLabelDto })
    data: Prisma.EmailWhiteLabelCreateArgs['data']
  ) {
    return context.prisma.emailWhiteLabel.create({ data });
  }

  @Mutation(() => EmailWhiteLabel)
  async updateEmailWhiteLabel(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereEmailWhiteLabelDto })
    where: Prisma.EmailWhiteLabelUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataEmailWhiteLabelDto })
    data: Prisma.EmailWhiteLabelUpdateArgs['data']
  ) {
    return context.prisma.emailWhiteLabel.update({ where, data });
  }

  @Mutation(() => EmailWhiteLabel)
  async removeEmailWhiteLabel(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteEmailWhiteLabelDto })
    where: Prisma.EmailWhiteLabelDeleteArgs['where']
  ) {
    return context.prisma.emailWhiteLabel.delete({ where });
  }
}
