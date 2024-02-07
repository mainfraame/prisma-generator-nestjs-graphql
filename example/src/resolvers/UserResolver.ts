import {
  Args,
  Context,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import {
  FindFirstUserArg,
  FindManyUserArg,
  FindUniqueUserArg
} from '../arg/UserArg';
import { Todo } from '../entities/TodoEntity';
import { User } from '../entities/UserEntity';
import { GraphQlContext } from '../types';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async findFirstUser(
    @Context() ctx: GraphQlContext,
    @Args() where: FindFirstUserArg
  ) {
    return ctx.prisma.user.findFirst({
      where: where as unknown as Prisma.UserFindFirstArgs['where']
    });
  }

  @Query(() => User, { nullable: true })
  async findUniqueUser(
    @Context() ctx: GraphQlContext,
    @Args() where: FindUniqueUserArg
  ) {
    return ctx.prisma.user.findUnique({
      where
    });
  }

  @Query(() => [User])
  async findManyUser(
    @Context() ctx: GraphQlContext,
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
  async todos(@Context() ctx: GraphQlContext, @Parent() parent: User) {
    return ctx.loaders.userTodos.load(parent.id);
  }
}
