import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateSponsorActivationDto {
  @Field(() => Boolean, { nullable: true })
  completedAddEmployees?: boolean;

  @Field(() => Boolean, { nullable: true })
  completedCompanyInformation?: boolean;

  @Field(() => Boolean, { nullable: true })
  completedConnectPayroll?: boolean;

  @Field(() => Boolean, { nullable: true })
  completedContractSigning?: boolean;

  @Field(() => Boolean, { nullable: true })
  completedDesignYourPlan?: boolean;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => Int, { nullable: false })
  sponsorActivationId: number;

  @Field(() => Int, { nullable: true })
  sponsorId?: number;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;
}

@InputType()
export class DeleteSponsorActivationDto {
  @Field(() => Int, { nullable: false })
  sponsorActivationId: number;
}

@InputType()
export class FindManySponsorActivationDto {
  @Field(() => Boolean, { nullable: true })
  completedAddEmployees?: boolean;

  @Field(() => Boolean, { nullable: true })
  completedCompanyInformation?: boolean;

  @Field(() => Boolean, { nullable: true })
  completedConnectPayroll?: boolean;

  @Field(() => Boolean, { nullable: true })
  completedContractSigning?: boolean;

  @Field(() => Boolean, { nullable: true })
  completedDesignYourPlan?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  sponsorActivationId?: number;

  @Field(() => Int, { nullable: true })
  sponsorId?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;
}

@InputType()
export class FindUniqueSponsorActivationDto {
  @Field(() => Int, { nullable: false })
  sponsorActivationId: number;
}

@InputType()
export class UpdateDataSponsorActivationDto {
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

@InputType()
export class UpdateWhereSponsorActivationDto {
  @Field(() => Int, { nullable: false })
  sponsorActivationId: number;
}
