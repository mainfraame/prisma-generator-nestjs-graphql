import { Field, InputType, Int } from '@nestjs/graphql';

import { IntFilterInput } from '../arg/IntFilterInput.arg';
import { IntOrFilter } from '../scalar/IntOrFilter.scalar';

@InputType()
export class CreateUserDto {
  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: true })
  name?: string | null;

  @Field(() => String, { nullable: false })
  password: string;
}

@InputType()
export class DeleteUserDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class DeleteManyUserDto {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => IntOrFilter, { nullable: true })
  id?: number | IntFilterInput;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  password?: string;
}

@InputType()
export class FindManyUserDto {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => IntOrFilter, { nullable: true })
  id?: number | IntFilterInput;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  password?: string;
}

@InputType()
export class FindUniqueUserDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class UpdateDataUserDto {
  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: false })
  password: string;

  @Field(() => String, { nullable: true })
  name?: string | null;
}

@InputType()
export class UpdateManyWhereUserDto {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => IntOrFilter, { nullable: true })
  id?: number | IntFilterInput;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  password?: string;
}

@InputType()
export class UpdateWhereUserDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
