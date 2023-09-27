import { Field, InputType, Int } from '@nestjs/graphql';

import { DateFilterScalar } from '../scalar/DateFilterScalar';
import { IntFilterScalar } from '../scalar/IntFilterScalar';
import { StringFilterScalar } from '../scalar/StringFilterScalar';

@InputType()
export class CreateTodoDto {
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

@InputType()
export class DeleteTodoDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class DeleteManyTodoDto {
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

@InputType()
export class FindManyTodoDto {
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

@InputType()
export class FindUniqueTodoDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class UpdateDataTodoDto {
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

@InputType()
export class UpdateManyWhereTodoDto {
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

@InputType()
export class UpdateWhereTodoDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
