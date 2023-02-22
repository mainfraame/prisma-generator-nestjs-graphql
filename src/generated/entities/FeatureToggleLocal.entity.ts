import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class FeatureToggleLocal {
  @Field(() => Int, { nullable: false })
  featureToggleLocalId: number;

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
