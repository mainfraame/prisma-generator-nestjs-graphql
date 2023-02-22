import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateAuthTokenDto {
  @Field(() => String, { nullable: false })
  accessToken: string;

  @Field(() => Int, { nullable: false })
  authTokenId: number;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  expiresAt: Date;

  @Field(() => Int, { nullable: false })
  partnerSystemId: number;

  @Field(() => String, { nullable: true })
  refreshToken?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class DeleteAuthTokenDto {
  @Field(() => Int, { nullable: false })
  authTokenId: number;
}

@InputType()
export class FindManyAuthTokenDto {
  @Field(() => String, { nullable: true })
  accessToken?: string;

  @Field(() => Int, { nullable: true })
  authTokenId?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  expiresAt?: Date;

  @Field(() => Int, { nullable: true })
  partnerSystemId?: number;

  @Field(() => String, { nullable: true })
  refreshToken?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;

  @Field(() => Int, { nullable: true })
  userId?: number;
}

@InputType()
export class FindUniqueAuthTokenDto {
  @Field(() => Int, { nullable: false })
  authTokenId: number;
}

@InputType()
export class UpdateDataAuthTokenDto {
  @Field(() => String, { nullable: false })
  accessToken: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  expiresAt: Date;

  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => Int, { nullable: false })
  partnerSystemId: number;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;
}

@InputType()
export class UpdateWhereAuthTokenDto {
  @Field(() => Int, { nullable: false })
  authTokenId: number;
}
