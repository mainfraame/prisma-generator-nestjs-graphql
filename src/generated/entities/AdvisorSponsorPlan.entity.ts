import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class AdvisorSponsorPlan {
  @Field(() => Int, { nullable: false })
  advisorId: number;

  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;

  @Field(() => Int, { nullable: true })
  programId?: number;
}
