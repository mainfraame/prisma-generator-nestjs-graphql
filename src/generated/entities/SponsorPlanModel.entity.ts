import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class SponsorPlanModel {
  @Field(() => Int, { nullable: false })
  sponsorPlanModelId: number;

  @Field(() => Int, { nullable: false })
  modelId: number;

  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;
}
