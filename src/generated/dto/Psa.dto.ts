import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreatePsaDto {
  @Field(() => Int, { nullable: false })
  accountId: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  activatedAt?: Date;

  @Field(() => Boolean, { nullable: false })
  blockNonRoth: boolean;

  @Field(() => Boolean, { nullable: false })
  blockRoth: boolean;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  eligibilityDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  entryDate?: Date;

  @Field(() => Int, { nullable: false })
  historicalYearsOfService: number;

  @Field(() => Boolean, { nullable: false })
  isEligible: boolean;

  @Field(() => Boolean, { nullable: false })
  optOut: boolean;

  @Field(() => Boolean, { nullable: true })
  paperlessNotices?: boolean;

  @Field(() => Boolean, { nullable: false })
  partialPlanTermination: boolean;

  @Field(() => Int, { nullable: false })
  participantId: number;

  @Field(() => Int, { nullable: false })
  psaId: number;

  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;

  @Field(() => String, { nullable: false })
  status: string;

  @Field(() => Int, { nullable: true })
  yearsOfVesting?: number;
}

@InputType()
export class DeletePsaDto {
  @Field(() => Int, { nullable: false })
  psaId: number;
}

@InputType()
export class FindManyPsaDto {
  @Field(() => Int, { nullable: true })
  accountId?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  activatedAt?: Date;

  @Field(() => Boolean, { nullable: true })
  blockNonRoth?: boolean;

  @Field(() => Boolean, { nullable: true })
  blockRoth?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  eligibilityDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  entryDate?: Date;

  @Field(() => Int, { nullable: true })
  historicalYearsOfService?: number;

  @Field(() => Boolean, { nullable: true })
  isEligible?: boolean;

  @Field(() => Boolean, { nullable: true })
  optOut?: boolean;

  @Field(() => Boolean, { nullable: true })
  paperlessNotices?: boolean;

  @Field(() => Boolean, { nullable: true })
  partialPlanTermination?: boolean;

  @Field(() => Int, { nullable: true })
  participantId?: number;

  @Field(() => Int, { nullable: true })
  psaId?: number;

  @Field(() => Int, { nullable: true })
  sponsorPlanId?: number;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => Int, { nullable: true })
  yearsOfVesting?: number;
}

@InputType()
export class FindUniquePsaDto {
  @Field(() => Int, { nullable: false })
  psaId: number;
}

@InputType()
export class UpdateDataPsaDto {
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

@InputType()
export class UpdateWherePsaDto {
  @Field(() => Int, { nullable: false })
  psaId: number;
}
