import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateAdvisorSponsorPlanDto {
  @Field(() => Int, { nullable: false })
  advisorId: number;

  @Field(() => Int, { nullable: true })
  programId?: number;

  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;
}

@InputType()
export class DeleteAdvisorSponsorPlanDto {
  @Field(() => Int, { nullable: false })
  advisorId: number;

  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;
}

@InputType()
export class FindManyAdvisorSponsorPlanDto {
  @Field(() => Int, { nullable: true })
  advisorId?: number;

  @Field(() => Int, { nullable: true })
  programId?: number;

  @Field(() => Int, { nullable: true })
  sponsorPlanId?: number;
}

@InputType()
export class FindUniqueAdvisorSponsorPlanDto {
  @Field(() => Int, { nullable: false })
  advisorId: number;

  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;
}

@InputType()
export class UpdateDataAdvisorSponsorPlanDto {
  @Field(() => Int, { nullable: false })
  advisorId: number;

  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;

  @Field(() => Int, { nullable: true })
  programId?: number;
}

@InputType()
export class UpdateWhereAdvisorSponsorPlanDto {
  @Field(() => Int, { nullable: false })
  advisorId: number;

  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;
}
