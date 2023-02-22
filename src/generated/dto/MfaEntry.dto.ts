import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateMfaEntryDto {
  @Field(() => GraphQLJSONObject, { nullable: true })
  createdBy?: Record<string, unknown>;

  @Field(() => String, { nullable: true })
  entryType?: string;

  @Field(() => Boolean, { nullable: true })
  isPrimary?: boolean;

  @Field(() => Int, { nullable: false })
  mfaDefinitionId: number;

  @Field(() => Int, { nullable: false })
  mfaEntryId: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  updatedBy?: Record<string, unknown>;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => String, { nullable: true })
  value?: string;
}

@InputType()
export class DeleteMfaEntryDto {
  @Field(() => Int, { nullable: false })
  mfaEntryId: number;
}

@InputType()
export class FindManyMfaEntryDto {
  @Field(() => GraphQLJSONObject, { nullable: true })
  createdBy?: Record<string, unknown>;

  @Field(() => String, { nullable: true })
  entryType?: string;

  @Field(() => Boolean, { nullable: true })
  isPrimary?: boolean;

  @Field(() => Int, { nullable: true })
  mfaDefinitionId?: number;

  @Field(() => Int, { nullable: true })
  mfaEntryId?: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  updatedBy?: Record<string, unknown>;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => String, { nullable: true })
  value?: string;
}

@InputType()
export class FindUniqueMfaEntryDto {
  @Field(() => Int, { nullable: false })
  mfaEntryId: number;
}

@InputType()
export class UpdateDataMfaEntryDto {
  @Field(() => Int, { nullable: false })
  mfaDefinitionId: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => String, { nullable: true })
  entryType?: string;

  @Field(() => String, { nullable: true })
  value?: string;

  @Field(() => Boolean, { nullable: true })
  isPrimary?: boolean;

  @Field(() => GraphQLJSONObject, { nullable: true })
  createdBy?: Record<string, unknown>;

  @Field(() => GraphQLJSONObject, { nullable: true })
  updatedBy?: Record<string, unknown>;
}

@InputType()
export class UpdateWhereMfaEntryDto {
  @Field(() => Int, { nullable: false })
  mfaEntryId: number;
}
