import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateSponsorPlanModelDto {
  @Field(() => Int, { nullable: false })
  modelId: number;

  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;

  @Field(() => Int, { nullable: false })
  sponsorPlanModelId: number;
}

@InputType()
export class DeleteSponsorPlanModelDto {
  @Field(() => Int, { nullable: false })
  sponsorPlanModelId: number;
}

@InputType()
export class FindManySponsorPlanModelDto {
  @Field(() => Int, { nullable: true })
  modelId?: number;

  @Field(() => Int, { nullable: true })
  sponsorPlanId?: number;

  @Field(() => Int, { nullable: true })
  sponsorPlanModelId?: number;
}

@InputType()
export class FindUniqueSponsorPlanModelDto {
  @Field(() => Int, { nullable: false })
  sponsorPlanModelId: number;
}

@InputType()
export class UpdateDataSponsorPlanModelDto {
  @Field(() => Int, { nullable: false })
  modelId: number;

  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;
}

@InputType()
export class UpdateWhereSponsorPlanModelDto {
  @Field(() => Int, { nullable: false })
  sponsorPlanModelId: number;
}
