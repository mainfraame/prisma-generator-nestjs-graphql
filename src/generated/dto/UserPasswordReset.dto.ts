import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateUserPasswordResetDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => Boolean, { nullable: true })
  isUsed?: boolean;

  @Field(() => Boolean, { nullable: true })
  isValid?: boolean;

  @Field(() => String, { nullable: true })
  token?: string;

  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class DeleteUserPasswordResetDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class FindManyUserPasswordResetDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Boolean, { nullable: true })
  isUsed?: boolean;

  @Field(() => Boolean, { nullable: true })
  isValid?: boolean;

  @Field(() => String, { nullable: true })
  token?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;
}

@InputType()
export class FindUniqueUserPasswordResetDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class UpdateDataUserPasswordResetDto {
  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => String, { nullable: true })
  token?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Boolean, { nullable: true })
  isUsed?: boolean;

  @Field(() => Boolean, { nullable: true })
  isValid?: boolean;
}

@InputType()
export class UpdateWhereUserPasswordResetDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
