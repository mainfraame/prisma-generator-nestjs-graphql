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
  DeleteManyUserArg,
  DeleteUserArg,
  FindFirstUserArg,
  FindManyUserArg,
  FindUniqueUserArg
} from '../arg/UserArg';
import { UpdateDataUserDto, UpdateWhereUserDto } from '../dto/UserDto';
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
  async createManyUser(
    @Context() ctx: { prisma: PrismaClient },
    @Args({ type: () => [CreateUserArg] }) data: CreateUserArg[]
  ) {
    return ctx.prisma.user.createMany({
      // todo:: fix the types in Create...Arg
      data: data as unknown as Prisma.UserCreateManyArgs['data']
    });
  }

  @Mutation(() => User)
  async updateUser(
    @Context() ctx: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereUserDto })
    where: UpdateWhereUserDto,
    @Args('data', { type: () => UpdateDataUserDto })
    data: Prisma.UserUpdateArgs['data']
  ) {
    return ctx.prisma.user.update({
      data,
      where
    });
  }

  @Mutation(() => User)
  async updateManyUser(
    @Context() ctx: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereUserDto })
    where: UpdateWhereUserDto,
    @Args('data', { type: () => [UpdateDataUserDto] })
    data: Prisma.UserUpdateManyArgs['data']
  ) {
    return ctx.prisma.user.updateMany({
      data,
      // todo:: fix this typing
      where: where as unknown as Prisma.UserUpdateManyArgs['where']
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

  @Mutation(() => User)
  async deleteManyUser(
    @Context() ctx: { prisma: PrismaClient },
    @Args() where: DeleteManyUserArg
  ) {
    return ctx.prisma.user.deleteMany({
      where: where as unknown as Prisma.UserDeleteManyArgs['where']
    });
  }
}
