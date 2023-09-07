import { Field, InputType, Int } from '@nestjs/graphql';

import { IntFilterInput } from '../arg/IntFilterInput.arg';
import { IntOrFilter } from '../scalar/IntOrFilter.scalar';

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

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => IntOrFilter, { nullable: true })
  id?: number | IntFilterInput;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => IntOrFilter, { nullable: true })
  userId?: number | IntFilterInput;
}

@InputType()
export class FindManyTodoDto {
  @Field(() => Boolean, { nullable: true })
  completed?: boolean;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => IntOrFilter, { nullable: true })
  id?: number | IntFilterInput;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => IntOrFilter, { nullable: true })
  userId?: number | IntFilterInput;
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

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => IntOrFilter, { nullable: true })
  id?: number | IntFilterInput;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => IntOrFilter, { nullable: true })
  userId?: number | IntFilterInput;
}

@InputType()
export class UpdateWhereTodoDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
