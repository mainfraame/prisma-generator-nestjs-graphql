import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateSponsorExemptionDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  canceledAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => String, { nullable: false })
  exemptionConfirmationCode: string;

  @Field(() => String, { nullable: false })
  reason: string;

  @Field(() => String, { nullable: false })
  signatureName: string;

  @Field(() => Int, { nullable: false })
  sponsorExemptionId: number;

  @Field(() => Int, { nullable: true })
  sponsorId?: number;
}

@InputType()
export class DeleteSponsorExemptionDto {
  @Field(() => Int, { nullable: false })
  sponsorExemptionId: number;
}

@InputType()
export class FindManySponsorExemptionDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  canceledAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => String, { nullable: true })
  exemptionConfirmationCode?: string;

  @Field(() => String, { nullable: true })
  reason?: string;

  @Field(() => String, { nullable: true })
  signatureName?: string;

  @Field(() => Int, { nullable: true })
  sponsorExemptionId?: number;

  @Field(() => Int, { nullable: true })
  sponsorId?: number;
}

@InputType()
export class FindUniqueSponsorExemptionDto {
  @Field(() => Int, { nullable: false })
  sponsorExemptionId: number;
}

@InputType()
export class UpdateDataSponsorExemptionDto {
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

@InputType()
export class UpdateWhereSponsorExemptionDto {
  @Field(() => Int, { nullable: false })
  sponsorExemptionId: number;
}
