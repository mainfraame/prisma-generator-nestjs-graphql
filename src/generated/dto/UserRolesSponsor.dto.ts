import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateUserRolesSponsorDto {
  @Field(() => Int, { nullable: false })
  accessRoleId: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => Boolean, { nullable: true })
  isTemp?: boolean;

  @Field(() => String, { nullable: false })
  sessionId: string;

  @Field(() => Int, { nullable: false })
  sponsorId: number;

  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class DeleteUserRolesSponsorDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class FindManyUserRolesSponsorDto {
  @Field(() => Int, { nullable: true })
  accessRoleId?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Boolean, { nullable: true })
  isTemp?: boolean;

  @Field(() => String, { nullable: true })
  sessionId?: string;

  @Field(() => Int, { nullable: true })
  sponsorId?: number;

  @Field(() => Int, { nullable: true })
  userId?: number;
}

@InputType()
export class FindUniqueUserRolesSponsorDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class UpdateDataUserRolesSponsorDto {
  @Field(() => Int, { nullable: false })
  sponsorId: number;

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
export class UpdateWhereUserRolesSponsorDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
