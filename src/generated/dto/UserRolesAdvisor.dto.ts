import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateUserRolesAdvisorDto {
  @Field(() => Int, { nullable: false })
  accessRoleId: number;

  @Field(() => Int, { nullable: false })
  advisorId: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => Boolean, { nullable: false })
  isTemp: boolean;

  @Field(() => String, { nullable: false })
  sessionId: string;

  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class DeleteUserRolesAdvisorDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class FindManyUserRolesAdvisorDto {
  @Field(() => Int, { nullable: true })
  accessRoleId?: number;

  @Field(() => Int, { nullable: true })
  advisorId?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Boolean, { nullable: true })
  isTemp?: boolean;

  @Field(() => String, { nullable: true })
  sessionId?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;
}

@InputType()
export class FindUniqueUserRolesAdvisorDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class UpdateDataUserRolesAdvisorDto {
  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => Int, { nullable: false })
  advisorId: number;

  @Field(() => Int, { nullable: false })
  accessRoleId: number;

  @Field(() => Boolean, { nullable: false })
  isTemp: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => String, { nullable: false })
  sessionId: string;
}

@InputType()
export class UpdateWhereUserRolesAdvisorDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
