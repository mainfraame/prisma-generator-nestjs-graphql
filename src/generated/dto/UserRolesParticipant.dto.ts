import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateUserRolesParticipantDto {
  @Field(() => Int, { nullable: false })
  accessRoleId: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => Boolean, { nullable: true })
  isTemp?: boolean;

  @Field(() => Int, { nullable: false })
  participantId: number;

  @Field(() => String, { nullable: false })
  sessionId: string;

  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class DeleteUserRolesParticipantDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class FindManyUserRolesParticipantDto {
  @Field(() => Int, { nullable: true })
  accessRoleId?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Boolean, { nullable: true })
  isTemp?: boolean;

  @Field(() => Int, { nullable: true })
  participantId?: number;

  @Field(() => String, { nullable: true })
  sessionId?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;
}

@InputType()
export class FindUniqueUserRolesParticipantDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class UpdateDataUserRolesParticipantDto {
  @Field(() => Int, { nullable: false })
  participantId: number;

  @Field(() => Int, { nullable: false })
  accessRoleId: number;

  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => Boolean, { nullable: true })
  isTemp?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => String, { nullable: false })
  sessionId: string;
}

@InputType()
export class UpdateWhereUserRolesParticipantDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
