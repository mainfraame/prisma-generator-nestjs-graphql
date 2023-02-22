import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateStatefulSchemaTrackingDto {
  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => Int, { nullable: false })
  entityId: number;

  @Field(() => Int, { nullable: false })
  sharedEntityTypeId: number;

  @Field(() => GraphQLJSONObject, { nullable: false })
  state: Record<string, unknown>;

  @Field(() => Int, { nullable: false })
  statefulSchemaId: number;

  @Field(() => Int, { nullable: false })
  statefulSchemaTrackingId: number;

  @Field(() => String, { nullable: false })
  status: undefined;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => Int, { nullable: false })
  updatedBy: number;
}

@InputType()
export class DeleteStatefulSchemaTrackingDto {
  @Field(() => Int, { nullable: false })
  statefulSchemaTrackingId: number;
}

@InputType()
export class FindManyStatefulSchemaTrackingDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  entityId?: number;

  @Field(() => Int, { nullable: true })
  sharedEntityTypeId?: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  state?: Record<string, unknown>;

  @Field(() => Int, { nullable: true })
  statefulSchemaId?: number;

  @Field(() => Int, { nullable: true })
  statefulSchemaTrackingId?: number;

  @Field(() => String, { nullable: true })
  status?: undefined;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;

  @Field(() => Int, { nullable: true })
  updatedBy?: number;
}

@InputType()
export class FindUniqueStatefulSchemaTrackingDto {
  @Field(() => Int, { nullable: false })
  statefulSchemaTrackingId: number;
}

@InputType()
export class UpdateDataStatefulSchemaTrackingDto {
  @Field(() => Int, { nullable: false })
  statefulSchemaId: number;

  @Field(() => Int, { nullable: false })
  sharedEntityTypeId: number;

  @Field(() => Int, { nullable: false })
  entityId: number;

  @Field(() => GraphQLJSONObject, { nullable: false })
  state: Record<string, unknown>;

  @Field(() => String, { nullable: false })
  status: undefined;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => Int, { nullable: false })
  updatedBy: number;
}

@InputType()
export class UpdateWhereStatefulSchemaTrackingDto {
  @Field(() => Int, { nullable: false })
  statefulSchemaTrackingId: number;
}
