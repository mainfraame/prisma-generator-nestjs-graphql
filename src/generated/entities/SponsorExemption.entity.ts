import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class SponsorExemption {
  @Field(() => Int, { nullable: false })
  sponsorExemptionId: number;

  @Field(() => String, { nullable: false })
  exemptionConfirmationCode: string;

  @Field(() => Int, { nullable: true })
  sponsorId?: number;

  @Field(() => String, { nullable: false })
  reason: string;

  @Field(() => String, { nullable: false })
  signatureName: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  canceledAt?: Date;
}
