import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class SponsorActivation {
  @Field(() => Int, { nullable: false })
  sponsorActivationId: number;

  @Field(() => Int, { nullable: true })
  sponsorId?: number;

  @Field(() => Boolean, { nullable: true })
  completedCompanyInformation?: boolean;

  @Field(() => Boolean, { nullable: true })
  completedDesignYourPlan?: boolean;

  @Field(() => Boolean, { nullable: true })
  completedConnectPayroll?: boolean;

  @Field(() => Boolean, { nullable: true })
  completedContractSigning?: boolean;

  @Field(() => Boolean, { nullable: true })
  completedAddEmployees?: boolean;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;
}
