import { Field, InputType, Int } from '@nestjs/graphql';

import { IntFilterScalar } from '../scalar/IntFilterScalar';
import { StringFilterScalar } from '../scalar/StringFilterScalar';

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
  @Field(() => StringFilterScalar, { nullable: true })
  email?: string | StringFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  name?: string | StringFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  password?: string | StringFilterScalar;
}

@InputType()
export class FindManyUserDto {
  @Field(() => StringFilterScalar, { nullable: true })
  email?: string | StringFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  name?: string | StringFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  password?: string | StringFilterScalar;
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
  @Field(() => StringFilterScalar, { nullable: true })
  email?: string | StringFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  name?: string | StringFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  password?: string | StringFilterScalar;
}

@InputType()
export class UpdateWhereUserDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
