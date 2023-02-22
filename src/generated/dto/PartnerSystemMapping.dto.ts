import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreatePartnerSystemMappingDto {
  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => Int, { nullable: false })
  entityTypeId: number;

  @Field(() => String, { nullable: true })
  externalId?: string;

  @Field(() => Int, { nullable: false })
  internalId: number;

  @Field(() => GraphQLJSONObject, { nullable: false })
  partnerSpecificData: Record<string, unknown>;

  @Field(() => Int, { nullable: false })
  partnerSystemId: number;

  @Field(() => Int, { nullable: false })
  partnerSystemMappingId: number;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;
}

@InputType()
export class DeletePartnerSystemMappingDto {
  @Field(() => Int, { nullable: false })
  partnerSystemMappingId: number;
}

@InputType()
export class FindManyPartnerSystemMappingDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  entityTypeId?: number;

  @Field(() => String, { nullable: true })
  externalId?: string;

  @Field(() => Int, { nullable: true })
  internalId?: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  partnerSpecificData?: Record<string, unknown>;

  @Field(() => Int, { nullable: true })
  partnerSystemId?: number;

  @Field(() => Int, { nullable: true })
  partnerSystemMappingId?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;
}

@InputType()
export class FindUniquePartnerSystemMappingDto {
  @Field(() => Int, { nullable: false })
  partnerSystemMappingId: number;
}

@InputType()
export class UpdateDataPartnerSystemMappingDto {
  @Field(() => Int, { nullable: false })
  partnerSystemId: number;

  @Field(() => String, { nullable: true })
  externalId?: string;

  @Field(() => Int, { nullable: false })
  internalId: number;

  @Field(() => Int, { nullable: false })
  entityTypeId: number;

  @Field(() => GraphQLJSONObject, { nullable: false })
  partnerSpecificData: Record<string, unknown>;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;
}

@InputType()
export class UpdateWherePartnerSystemMappingDto {
  @Field(() => Int, { nullable: false })
  partnerSystemMappingId: number;
}
