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
  CreateUserArg,
  DeleteUserArg,
  FindManyUserArg,
  FindUniqueUserArg
} from '../arg/User.arg';
import { UpdateDataUserDto, UpdateWhereUserDto } from '../dto/User.dto';
import { Todo } from '../entities/Todo.entity';
import { User } from '../entities/User.entity';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  async findUser(
    @Context() ctx: { prisma: PrismaClient },
    @Args() where: FindUniqueUserArg
  ) {
    return ctx.prisma.user.findUnique({
      where
    });
  }

  @Query(() => [User])
  async findManyUsers(
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

  @ResolveField(() => [Todo])
  async todos(
    @Context() ctx: { prisma: PrismaClient },
    @Parent() parent: User
  ) {
    return ctx.prisma.todo.findMany({
      where: { userId: parent.id }
    });
  }

  @Mutation(() => User)
  async createUser(
    @Context() ctx: { prisma: PrismaClient },
    @Args() data: CreateUserArg
  ) {
    return ctx.prisma.user.create({
      // todo:: fix the types in Create...Arg
      data: data as unknown as Prisma.UserCreateArgs['data']
    });
  }

  @Mutation(() => User)
  async updateUser(
    @Context() ctx: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereUserDto })
    where: UpdateWhereUserDto,
    @Args('data', { type: () => UpdateDataUserDto })
    data: Prisma.UserCreateArgs['data']
  ) {
    return ctx.prisma.user.update({
      data,
      where
    });
  }

  @Mutation(() => User)
  async deleteUser(
    @Context() ctx: { prisma: PrismaClient },
    @Args() where: DeleteUserArg
  ) {
    return ctx.prisma.user.delete({
      where
    });
  }
}
