import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateEmailDefinitionDto,
  DeleteEmailDefinitionDto,
  FindManyEmailDefinitionDto,
  FindUniqueEmailDefinitionDto,
  UpdateDataEmailDefinitionDto,
  UpdateWhereEmailDefinitionDto
} from '../dto/EmailDefinition.dto';
import { EmailDefinition } from '../entities/EmailDefinition.entity';

@Resolver(() => EmailDefinition)
export class EmailDefinitionResolver {
  @Query(() => EmailDefinition)
  async getEmailDefinition(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueEmailDefinitionDto })
    where: Prisma.EmailDefinitionFindUniqueArgs['where']
  ) {
    return context.prisma.emailDefinition.findUnique({ where });
  }

  @Query(() => [EmailDefinition])
  async getAllEmailDefinitions(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyEmailDefinitionDto })
    where: Prisma.EmailDefinitionFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.emailDefinition.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => EmailDefinition)
  async createEmailDefinition(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateEmailDefinitionDto })
    data: Prisma.EmailDefinitionCreateArgs['data']
  ) {
    return context.prisma.emailDefinition.create({ data });
  }

  @Mutation(() => EmailDefinition)
  async updateEmailDefinition(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereEmailDefinitionDto })
    where: Prisma.EmailDefinitionUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataEmailDefinitionDto })
    data: Prisma.EmailDefinitionUpdateArgs['data']
  ) {
    return context.prisma.emailDefinition.update({ where, data });
  }

  @Mutation(() => EmailDefinition)
  async removeEmailDefinition(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteEmailDefinitionDto })
    where: Prisma.EmailDefinitionDeleteArgs['where']
  ) {
    return context.prisma.emailDefinition.delete({ where });
  }
}
