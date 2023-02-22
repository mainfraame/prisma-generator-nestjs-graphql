import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateUserMfaAttemptDto {
  @Field(() => Int, { nullable: false })
  attempts: number;

  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;

  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class DeleteUserMfaAttemptDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class FindManyUserMfaAttemptDto {
  @Field(() => Int, { nullable: true })
  attempts?: number;

  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;

  @Field(() => Int, { nullable: true })
  userId?: number;
}

@InputType()
export class FindUniqueUserMfaAttemptDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class UpdateDataUserMfaAttemptDto {
  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => Int, { nullable: false })
  attempts: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;
}

@InputType()
export class UpdateWhereUserMfaAttemptDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
