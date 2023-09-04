import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { TodoOrderBy } from '../scalar/TodoOrderBy.scalar';

@ArgsType()
export class CreateTodoArg {
  @Field(() => Boolean, { nullable: false })
  completed: boolean;

  @Field(() => Date, { nullable: false })
  createdAt: Date;

  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => Date, { nullable: false })
  updatedAt: Date;

  @Field(() => Int, { nullable: false })
  userId: number;
}

@ArgsType()
export class DeleteTodoArg {
  @Field(() => Int, { nullable: false })
  id: number;
}

@ArgsType()
export class FindManyTodoArg {
  @Field(() => Boolean, { nullable: true })
  completed?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => TodoOrderBy, { nullable: true })
  orderBy?: Prisma.TodoFindManyArgs['orderBy'];

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;
}

@ArgsType()
export class FindUniqueTodoArg {
  @Field(() => Int, { nullable: false })
  id: number;
}

@ArgsType()
export class UpdateDataTodoArg {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => Boolean, { nullable: false })
  completed: boolean;

  @Field(() => Date, { nullable: false })
  createdAt: Date;

  @Field(() => Date, { nullable: false })
  updatedAt: Date;

  @Field(() => Int, { nullable: false })
  userId: number;
}

@ArgsType()
export class UpdateWhereTodoArg {
  @Field(() => Int, { nullable: false })
  id: number;
}
