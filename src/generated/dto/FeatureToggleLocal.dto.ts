import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateFeatureToggleLocalDto {
  @Field(() => Int, { nullable: true })
  advisorId?: number;

  @Field(() => Int, { nullable: true })
  featureToggleGlobalId?: number;

  @Field(() => Int, { nullable: false })
  featureToggleLocalId: number;

  @Field(() => Int, { nullable: true })
  firmId?: number;

  @Field(() => Boolean, { nullable: true })
  isEnabled?: boolean;

  @Field(() => Boolean, { nullable: true })
  isGlobalOverrideEnabled?: boolean;

  @Field(() => Int, { nullable: true })
  participantId?: number;

  @Field(() => Int, { nullable: true })
  sponsorId?: number;

  @Field(() => Int, { nullable: true })
  sponsorPlanId?: number;
}

@InputType()
export class DeleteFeatureToggleLocalDto {
  @Field(() => Int, { nullable: false })
  featureToggleLocalId: number;
}

@InputType()
export class FindManyFeatureToggleLocalDto {
  @Field(() => Int, { nullable: true })
  advisorId?: number;

  @Field(() => Int, { nullable: true })
  featureToggleGlobalId?: number;

  @Field(() => Int, { nullable: true })
  featureToggleLocalId?: number;

  @Field(() => Int, { nullable: true })
  firmId?: number;

  @Field(() => Boolean, { nullable: true })
  isEnabled?: boolean;

  @Field(() => Boolean, { nullable: true })
  isGlobalOverrideEnabled?: boolean;

  @Field(() => Int, { nullable: true })
  participantId?: number;

  @Field(() => Int, { nullable: true })
  sponsorId?: number;

  @Field(() => Int, { nullable: true })
  sponsorPlanId?: number;
}

@InputType()
export class FindUniqueFeatureToggleLocalDto {
  @Field(() => Int, { nullable: false })
  featureToggleLocalId: number;
}

@InputType()
export class UpdateDataFeatureToggleLocalDto {
  @Field(() => Int, { nullable: true })
  featureToggleGlobalId?: number;

  @Field(() => Boolean, { nullable: true })
  isEnabled?: boolean;

  @Field(() => Boolean, { nullable: true })
  isGlobalOverrideEnabled?: boolean;

  @Field(() => Int, { nullable: true })
  firmId?: number;

  @Field(() => Int, { nullable: true })
  advisorId?: number;

  @Field(() => Int, { nullable: true })
  sponsorId?: number;

  @Field(() => Int, { nullable: true })
  sponsorPlanId?: number;

  @Field(() => Int, { nullable: true })
  participantId?: number;
}

@InputType()
export class UpdateWhereFeatureToggleLocalDto {
  @Field(() => Int, { nullable: false })
  featureToggleLocalId: number;
}
