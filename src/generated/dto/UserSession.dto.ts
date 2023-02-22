import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateUserSessionDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: true })
  sessionId?: string;

  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class DeleteUserSessionDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class FindManyUserSessionDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  sessionId?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;
}

@InputType()
export class FindUniqueUserSessionDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class UpdateDataUserSessionDto {
  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => String, { nullable: true })
  sessionId?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;
}

@InputType()
export class UpdateWhereUserSessionDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
