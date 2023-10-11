import {
  Args,
  Context,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  FindFirstUserArg,
  FindManyUserArg,
  FindUniqueUserArg
} from '../arg/UserArg';
import { Todo } from '../entities/TodoEntity';
import { User } from '../entities/UserEntity';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async findFirstUser(
    @Context() ctx: { prisma: PrismaClient },
    @Args() where: FindFirstUserArg
  ) {
    return ctx.prisma.user.findFirst({
      where: where as unknown as Prisma.UserFindFirstArgs['where']
    });
  }

  @Query(() => User, { nullable: true })
  async findUniqueUser(
    @Context() ctx: { prisma: PrismaClient },
    @Args() where: FindUniqueUserArg
  ) {
    return ctx.prisma.user.findUnique({
      where
    });
  }

  @Query(() => [User])
  async findManyUser(
    @Context() ctx: { prisma: PrismaClient },
    @Args() { skip, take, orderBy, ...where }: FindManyUserArg
  ) {
    return ctx.prisma.user.findMany({
      orderBy: orderBy as unknown as Prisma.UserFindManyArgs['orderBy'],
      skip: skip ?? 0,
      take: take ?? 100,
      where: where as unknown as Prisma.UserFindManyArgs['where']
    });
  }

  @ResolveField(() => [Todo], { nullable: 'itemsAndList', defaultValue: [] })
  async todos(
    @Context() ctx: { prisma: PrismaClient },
    @Parent() parent: User
  ) {
    return ctx.prisma.todo
      .findMany({
        where: { userId: parent.id }
        /** ignore missing data (make nullable) for now */
      })
      .catch(() => []);
  }
}
