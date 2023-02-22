import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateUserRolesEntityDto {
  @Field(() => Int, { nullable: false })
  accessRoleId: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: false })
  entityId: number;

  @Field(() => String, { nullable: false })
  entityType: string;

  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class DeleteUserRolesEntityDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class FindManyUserRolesEntityDto {
  @Field(() => Int, { nullable: true })
  accessRoleId?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  entityId?: number;

  @Field(() => String, { nullable: true })
  entityType?: string;

  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int, { nullable: true })
  userId?: number;
}

@InputType()
export class FindUniqueUserRolesEntityDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class UpdateDataUserRolesEntityDto {
  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => Int, { nullable: false })
  accessRoleId: number;

  @Field(() => String, { nullable: false })
  entityType: string;

  @Field(() => Int, { nullable: false })
  entityId: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;
}

@InputType()
export class UpdateWhereUserRolesEntityDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
