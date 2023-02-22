import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateUserDto {
  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => Int, { nullable: true })
  invalidPasswordCount?: number;

  @Field(() => Boolean, { nullable: true })
  isLocked?: boolean;

  @Field(() => Boolean, { nullable: true })
  isMfaEnabled?: boolean;

  @Field(() => String, { nullable: true })
  mfaSecret?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => Boolean, { nullable: true })
  pendingPasswordReset?: boolean;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class DeleteUserDto {
  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class FindManyUserDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => Int, { nullable: true })
  invalidPasswordCount?: number;

  @Field(() => Boolean, { nullable: true })
  isLocked?: boolean;

  @Field(() => Boolean, { nullable: true })
  isMfaEnabled?: boolean;

  @Field(() => String, { nullable: true })
  mfaSecret?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => Boolean, { nullable: true })
  pendingPasswordReset?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;

  @Field(() => Int, { nullable: true })
  userId?: number;
}

@InputType()
export class FindUniqueUserDto {
  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class UpdateDataUserDto {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => Boolean, { nullable: true })
  pendingPasswordReset?: boolean;

  @Field(() => Int, { nullable: true })
  invalidPasswordCount?: number;

  @Field(() => Boolean, { nullable: true })
  isLocked?: boolean;

  @Field(() => Boolean, { nullable: true })
  isMfaEnabled?: boolean;

  @Field(() => String, { nullable: true })
  mfaSecret?: string;
}

@InputType()
export class UpdateWhereUserDto {
  @Field(() => Int, { nullable: false })
  userId: number;
}
