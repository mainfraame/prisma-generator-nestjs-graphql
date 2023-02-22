import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateUserInviteDto {
  @Field(() => Int, { nullable: false })
  accessRoleIds: number;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => String, { nullable: false })
  deliveryMethod: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => Int, { nullable: false })
  entityId: number;

  @Field(() => String, { nullable: false })
  entityType: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  expiresAt: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  invalidatedAt?: Date;

  @Field(() => String, { nullable: false })
  inviteCode: string;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int, { nullable: false })
  userInviteId: number;

  @Field(() => Int, { nullable: false })
  verificationAttempts: number;
}

@InputType()
export class DeleteUserInviteDto {
  @Field(() => Int, { nullable: false })
  userInviteId: number;
}

@InputType()
export class FindManyUserInviteDto {
  @Field(() => Int, { nullable: true })
  accessRoleIds?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => String, { nullable: true })
  deliveryMethod?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => Int, { nullable: true })
  entityId?: number;

  @Field(() => String, { nullable: true })
  entityType?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  expiresAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  invalidatedAt?: Date;

  @Field(() => String, { nullable: true })
  inviteCode?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int, { nullable: true })
  userInviteId?: number;

  @Field(() => Int, { nullable: true })
  verificationAttempts?: number;
}

@InputType()
export class FindUniqueUserInviteDto {
  @Field(() => Int, { nullable: false })
  userInviteId: number;
}

@InputType()
export class UpdateDataUserInviteDto {
  @Field(() => String, { nullable: false })
  inviteCode: string;

  @Field(() => String, { nullable: false })
  deliveryMethod: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: false })
  entityType: string;

  @Field(() => Int, { nullable: false })
  entityId: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int, { nullable: false })
  accessRoleIds: number;

  @Field(() => Int, { nullable: false })
  verificationAttempts: number;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  expiresAt: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  invalidatedAt?: Date;
}

@InputType()
export class UpdateWhereUserInviteDto {
  @Field(() => Int, { nullable: false })
  userInviteId: number;
}
