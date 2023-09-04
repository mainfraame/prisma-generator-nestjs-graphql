import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateTodoArg,
  DeleteTodoArg,
  FindManyTodoArg,
  FindUniqueTodoArg
} from '../arg/Todo.arg';
import { UpdateDataTodoDto, UpdateWhereTodoDto } from '../dto/Todo.dto';
import { Todo } from '../entities/Todo.entity';
import { User } from '../entities/User.entity';

@Resolver(() => Todo)
export class TodoResolver {
  @Query(() => Todo)
  async findTodo(
    @Context() ctx: { prisma: PrismaClient },
    @Args() where: FindUniqueTodoArg
  ) {
    return ctx.prisma.todo.findUnique({
      where
    });
  }

  @Query(() => [Todo])
  async findManyTodos(
    @Context() ctx: { prisma: PrismaClient },
    @Args() { skip, take, orderBy, ...where }: FindManyTodoArg
  ) {
    return ctx.prisma.todo.findMany({
      orderBy: orderBy as unknown as Prisma.TodoFindManyArgs['orderBy'],
      skip: skip ?? 0,
      take: take ?? 100,
      where: where as unknown as Prisma.TodoFindManyArgs['where']
    });
  }

  @ResolveField(() => User)
  async user(@Context() ctx: { prisma: PrismaClient }, @Parent() parent: Todo) {
    return ctx.prisma.user.findUnique({
      where: { id: parent.userId }
    });
  }

  @Mutation(() => Todo)
  async createTodo(
    @Context() ctx: { prisma: PrismaClient },
    @Args() data: CreateTodoArg
  ) {
    return ctx.prisma.todo.create({
      // todo:: fix the types in Create...Arg
      data: data as unknown as Prisma.TodoCreateArgs['data']
    });
  }

  @Mutation(() => Todo)
  async updateTodo(
    @Context() ctx: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereTodoDto })
    where: UpdateWhereTodoDto,
    @Args('data', { type: () => UpdateDataTodoDto })
    data: Prisma.TodoCreateArgs['data']
  ) {
    return ctx.prisma.todo.update({
      data,
      where
    });
  }

  @Mutation(() => Todo)
  async deleteTodo(
    @Context() ctx: { prisma: PrismaClient },
    @Args() where: DeleteTodoArg
  ) {
    return ctx.prisma.todo.delete({
      where
    });
  }
}
