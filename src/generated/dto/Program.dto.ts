import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateProgramDto {
  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: false })
  programId: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  programSpecificData?: Record<string, unknown>;

  @Field(() => Int, { nullable: false })
  programStatusId: number;

  @Field(() => Int, { nullable: false })
  programStrategyStatusId: number;

  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;

  @Field(() => GraphQLJSONObject, { nullable: true })
  updatedBy?: Record<string, unknown>;
}

@InputType()
export class DeleteProgramDto {
  @Field(() => Int, { nullable: false })
  programId: number;
}

@InputType()
export class FindManyProgramDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  programId?: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  programSpecificData?: Record<string, unknown>;

  @Field(() => Int, { nullable: true })
  programStatusId?: number;

  @Field(() => Int, { nullable: true })
  programStrategyStatusId?: number;

  @Field(() => String, { nullable: true })
  type?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;

  @Field(() => GraphQLJSONObject, { nullable: true })
  updatedBy?: Record<string, unknown>;
}

@InputType()
export class FindUniqueProgramDto {
  @Field(() => Int, { nullable: false })
  programId: number;
}

@InputType()
export class UpdateDataProgramDto {
  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => Int, { nullable: false })
  programStatusId: number;

  @Field(() => Int, { nullable: false })
  programStrategyStatusId: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  programSpecificData?: Record<string, unknown>;

  @Field(() => GraphQLJSONObject, { nullable: true })
  updatedBy?: Record<string, unknown>;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;
}

@InputType()
export class UpdateWhereProgramDto {
  @Field(() => Int, { nullable: false })
  programId: number;
}
