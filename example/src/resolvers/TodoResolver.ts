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
  FindFirstTodoArg,
  FindManyTodoArg,
  FindUniqueTodoArg
} from '../arg/TodoArg';
import { Todo } from '../entities/TodoEntity';
import { User } from '../entities/UserEntity';
import { GraphQlContext } from '../types';

@Resolver(() => Todo)
export class TodoResolver {
  @Query(() => Todo, { nullable: true })
  async findFirstTodo(
    @Context() ctx: GraphQlContext,
    @Args() where: FindFirstTodoArg
  ) {
    return ctx.prisma.todo.findFirst({
      where: where as unknown as Prisma.TodoFindFirstArgs['where']
    });
  }

  @Query(() => Todo, { nullable: true })
  async findUniqueTodo(
    @Context() ctx: GraphQlContext,
    @Args() where: FindUniqueTodoArg
  ) {
    return ctx.prisma.todo.findUnique({
      where
    });
  }

  @Query(() => [Todo])
  async findManyTodo(
    @Context() ctx: GraphQlContext,
    @Args() { skip, take, orderBy, ...where }: FindManyTodoArg
  ) {
    return ctx.prisma.todo.findMany({
      orderBy: orderBy as unknown as Prisma.TodoFindManyArgs['orderBy'],
      skip: skip ?? 0,
      take: take ?? 100,
      where: where as unknown as Prisma.TodoFindManyArgs['where']
    });
  }

  @ResolveField(() => User, { nullable: false })
  async user(@Context() ctx: GraphQlContext, @Parent() parent: Todo) {
    return ctx.loaders.todoUser.load(parent.userId);
  }
}
