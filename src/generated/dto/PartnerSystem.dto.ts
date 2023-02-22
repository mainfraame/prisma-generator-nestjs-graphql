import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreatePartnerSystemDto {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => Int, { nullable: false })
  partnerSystemId: number;
}

@InputType()
export class DeletePartnerSystemDto {
  @Field(() => Int, { nullable: false })
  partnerSystemId: number;
}

@InputType()
export class FindManyPartnerSystemDto {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  partnerSystemId?: number;
}

@InputType()
export class FindUniquePartnerSystemDto {
  @Field(() => Int, { nullable: false })
  partnerSystemId: number;
}

@InputType()
export class UpdateDataPartnerSystemDto {
  @Field(() => String, { nullable: false })
  name: string;
}

@InputType()
export class UpdateWherePartnerSystemDto {
  @Field(() => Int, { nullable: false })
  partnerSystemId: number;
}
