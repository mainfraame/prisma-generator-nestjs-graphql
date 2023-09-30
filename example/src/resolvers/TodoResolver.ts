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
  DeleteManyTodoArg,
  DeleteTodoArg,
  FindFirstTodoArg,
  FindManyTodoArg,
  FindUniqueTodoArg
} from '../arg/TodoArg';
import { UpdateDataTodoDto, UpdateWhereTodoDto } from '../dto/TodoDto';
import { Todo } from '../entities/TodoEntity';
import { User } from '../entities/UserEntity';

@Resolver(() => Todo)
export class TodoResolver {
  @Query(() => Todo, { nullable: true })
  async findFirstTodo(
    @Context() ctx: { prisma: PrismaClient },
    @Args() where: FindFirstTodoArg
  ) {
    return ctx.prisma.todo.findFirst({
      where: where as unknown as Prisma.TodoFindFirstArgs['where']
    });
  }

  @Query(() => Todo, { nullable: true })
  async findUniqueTodo(
    @Context() ctx: { prisma: PrismaClient },
    @Args() where: FindUniqueTodoArg
  ) {
    return ctx.prisma.todo.findUnique({
      where
    });
  }

  @Query(() => [Todo])
  async findManyTodo(
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

  @ResolveField(() => User, { nullable: false })
  async user(@Context() ctx: { prisma: PrismaClient }, @Parent() parent: Todo) {
    return ctx.prisma.user
      .findUnique({
        where: { id: parent.userId }
        /** ignore missing data (make nullable) for now */
      })
      .catch(() => null);
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
  async createManyTodo(
    @Context() ctx: { prisma: PrismaClient },
    @Args({ type: () => [CreateTodoArg] }) data: CreateTodoArg[]
  ) {
    return ctx.prisma.todo.createMany({
      // todo:: fix the types in Create...Arg
      data: data as unknown as Prisma.TodoCreateManyArgs['data']
    });
  }

  @Mutation(() => Todo)
  async updateTodo(
    @Context() ctx: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereTodoDto })
    where: UpdateWhereTodoDto,
    @Args('data', { type: () => UpdateDataTodoDto })
    data: Prisma.TodoUpdateArgs['data']
  ) {
    return ctx.prisma.todo.update({
      data,
      where
    });
  }

  @Mutation(() => Todo)
  async updateManyTodo(
    @Context() ctx: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereTodoDto })
    where: UpdateWhereTodoDto,
    @Args('data', { type: () => [UpdateDataTodoDto] })
    data: Prisma.TodoUpdateManyArgs['data']
  ) {
    return ctx.prisma.todo.updateMany({
      data,
      // todo:: fix this typing
      where: where as unknown as Prisma.TodoUpdateManyArgs['where']
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

  @Mutation(() => Todo)
  async deleteManyTodo(
    @Context() ctx: { prisma: PrismaClient },
    @Args() where: DeleteManyTodoArg
  ) {
    return ctx.prisma.todo.deleteMany({
      where: where as unknown as Prisma.TodoDeleteManyArgs['where']
    });
  }
}
