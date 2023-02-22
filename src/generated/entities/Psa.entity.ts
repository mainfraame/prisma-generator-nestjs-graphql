import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class Psa {
  @Field(() => Int, { nullable: false })
  psaId: number;

  @Field(() => Int, { nullable: false })
  participantId: number;

  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;

  @Field(() => Int, { nullable: false })
  accountId: number;

  @Field(() => String, { nullable: false })
  status: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  activatedAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => Boolean, { nullable: false })
  isEligible: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  eligibilityDate?: Date;

  @Field(() => Boolean, { nullable: false })
  optOut: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  entryDate?: Date;

  @Field(() => Boolean, { nullable: true })
  paperlessNotices?: boolean;

  @Field(() => Boolean, { nullable: false })
  blockRoth: boolean;

  @Field(() => Boolean, { nullable: false })
  blockNonRoth: boolean;

  @Field(() => Int, { nullable: true })
  yearsOfVesting?: number;

  @Field(() => Boolean, { nullable: false })
  partialPlanTermination: boolean;

  @Field(() => Int, { nullable: false })
  historicalYearsOfService: number;
}
