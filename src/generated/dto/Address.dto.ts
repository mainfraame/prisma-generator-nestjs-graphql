import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateAddressDto {
  @Field(() => String, { nullable: true })
  address1?: string;

  @Field(() => String, { nullable: true })
  address2?: string;

  @Field(() => Int, { nullable: false })
  addressId: number;

  @Field(() => String, { nullable: true })
  addressType?: undefined;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => Int, { nullable: false })
  entityId: number;

  @Field(() => Int, { nullable: false })
  entityTypeId: number;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => GraphQLJSONObject, { nullable: true })
  updatedBy?: Record<string, unknown>;

  @Field(() => String, { nullable: true })
  zip?: string;
}

@InputType()
export class DeleteAddressDto {
  @Field(() => Int, { nullable: false })
  addressId: number;
}

@InputType()
export class FindManyAddressDto {
  @Field(() => String, { nullable: true })
  address1?: string;

  @Field(() => String, { nullable: true })
  address2?: string;

  @Field(() => Int, { nullable: true })
  addressId?: number;

  @Field(() => String, { nullable: true })
  addressType?: undefined;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  entityId?: number;

  @Field(() => Int, { nullable: true })
  entityTypeId?: number;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;

  @Field(() => GraphQLJSONObject, { nullable: true })
  updatedBy?: Record<string, unknown>;

  @Field(() => String, { nullable: true })
  zip?: string;
}

@InputType()
export class FindUniqueAddressDto {
  @Field(() => Int, { nullable: false })
  addressId: number;
}

@InputType()
export class UpdateDataAddressDto {
  @Field(() => String, { nullable: true })
  addressType?: undefined;

  @Field(() => Int, { nullable: false })
  entityId: number;

  @Field(() => Int, { nullable: false })
  entityTypeId: number;

  @Field(() => String, { nullable: true })
  address1?: string;

  @Field(() => String, { nullable: true })
  address2?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  zip?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => GraphQLJSONObject, { nullable: true })
  updatedBy?: Record<string, unknown>;
}

@InputType()
export class UpdateWhereAddressDto {
  @Field(() => Int, { nullable: false })
  addressId: number;
}
