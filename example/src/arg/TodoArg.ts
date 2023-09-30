import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { DateFilterScalar } from '../scalar/DateFilterScalar';
import { IntFilterScalar } from '../scalar/IntFilterScalar';
import { StringFilterScalar } from '../scalar/StringFilterScalar';
import { TodoOrderByScalar } from '../scalar/TodoOrderByScalar';

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
export class DeleteManyTodoArg {
  @Field(() => Boolean, { nullable: true })
  completed?: boolean;

  @Field(() => DateFilterScalar, { nullable: true })
  createdAt?: Date | DateFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  title?: string | StringFilterScalar;

  @Field(() => DateFilterScalar, { nullable: true })
  updatedAt?: Date | DateFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  userId?: number | IntFilterScalar;
}

@ArgsType()
export class FindManyTodoArg {
  @Field(() => Boolean, { nullable: true })
  completed?: boolean;

  @Field(() => DateFilterScalar, { nullable: true })
  createdAt?: Date | DateFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  title?: string | StringFilterScalar;

  @Field(() => DateFilterScalar, { nullable: true })
  updatedAt?: Date | DateFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  userId?: number | IntFilterScalar;

  @Field(() => TodoOrderByScalar, { nullable: true })
  orderBy?: Prisma.TodoFindManyArgs['orderBy'];

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;
}

@ArgsType()
export class FindFirstTodoArg {
  @Field(() => Boolean, { nullable: true })
  completed?: boolean;

  @Field(() => DateFilterScalar, { nullable: true })
  createdAt?: Date | DateFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  title?: string | StringFilterScalar;

  @Field(() => DateFilterScalar, { nullable: true })
  updatedAt?: Date | DateFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  userId?: number | IntFilterScalar;
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
