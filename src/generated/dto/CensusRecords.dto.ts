import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateCensusRecordsDto {
  @Field(() => Int, { nullable: true })
  afterTaxContribution?: number;

  @Field(() => String, { nullable: true })
  afterTaxContributionType?: string;

  @Field(() => Float, { nullable: true })
  annualSalary?: number;

  @Field(() => Boolean, { nullable: false })
  blockNonRoth: boolean;

  @Field(() => Boolean, { nullable: false })
  blockRoth: boolean;

  @Field(() => Int, { nullable: false })
  censusRecordsId: number;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  compensationType?: string;

  @Field(() => Int, { nullable: true })
  contribution?: number;

  @Field(() => String, { nullable: true })
  contributionType?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => Int, { nullable: true })
  currentHours?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  dateOfBirth?: Date;

  @Field(() => String, { nullable: true })
  dateOfBirthStrRec?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  dateOfHire?: Date;

  @Field(() => String, { nullable: true })
  dateOfHireStrRec?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  dateOfRehire?: Date;

  @Field(() => String, { nullable: true })
  dateOfRehireStrRec?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  dateOfTermination?: Date;

  @Field(() => String, { nullable: true })
  dateOfTerminationStrRec?: string;

  @Field(() => String, { nullable: true })
  division?: string;

  @Field(() => String, { nullable: true })
  ein?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  employmentType?: string;

  @Field(() => String, { nullable: true })
  externalId?: string;

  @Field(() => String, { nullable: false })
  firstName: string;

  @Field(() => String, { nullable: true })
  fullTime?: string;

  @Field(() => String, { nullable: true })
  gender?: string;

  @Field(() => String, { nullable: true })
  grossCompensation?: string;

  @Field(() => String, { nullable: true })
  guid?: string;

  @Field(() => Boolean, { nullable: false })
  isOriginalRecord: boolean;

  @Field(() => String, { nullable: false })
  lastName: string;

  @Field(() => String, { nullable: true })
  maritalStatus?: string;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => String, { nullable: true })
  payRate?: string;

  @Field(() => String, { nullable: true })
  personalEmail?: string;

  @Field(() => Int, { nullable: true })
  priorYearHours?: number;

  @Field(() => Int, { nullable: true })
  rothContribution?: number;

  @Field(() => String, { nullable: true })
  rothContributionType?: string;

  @Field(() => String, { nullable: false })
  socialSecurityNumber: string;

  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  streetAddress1?: string;

  @Field(() => String, { nullable: true })
  streetAddress2?: string;

  @Field(() => String, { nullable: true })
  ucid?: string;

  @Field(() => Int, { nullable: true })
  yearsForVesting?: number;

  @Field(() => String, { nullable: true })
  zip?: string;
}

@InputType()
export class DeleteCensusRecordsDto {
  @Field(() => Int, { nullable: false })
  censusRecordsId: number;
}

@InputType()
export class FindManyCensusRecordsDto {
  @Field(() => Int, { nullable: true })
  afterTaxContribution?: number;

  @Field(() => String, { nullable: true })
  afterTaxContributionType?: string;

  @Field(() => Float, { nullable: true })
  annualSalary?: number;

  @Field(() => Boolean, { nullable: true })
  blockNonRoth?: boolean;

  @Field(() => Boolean, { nullable: true })
  blockRoth?: boolean;

  @Field(() => Int, { nullable: true })
  censusRecordsId?: number;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  compensationType?: string;

  @Field(() => Int, { nullable: true })
  contribution?: number;

  @Field(() => String, { nullable: true })
  contributionType?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  currentHours?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  dateOfBirth?: Date;

  @Field(() => String, { nullable: true })
  dateOfBirthStrRec?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  dateOfHire?: Date;

  @Field(() => String, { nullable: true })
  dateOfHireStrRec?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  dateOfRehire?: Date;

  @Field(() => String, { nullable: true })
  dateOfRehireStrRec?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  dateOfTermination?: Date;

  @Field(() => String, { nullable: true })
  dateOfTerminationStrRec?: string;

  @Field(() => String, { nullable: true })
  division?: string;

  @Field(() => String, { nullable: true })
  ein?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  employmentType?: string;

  @Field(() => String, { nullable: true })
  externalId?: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  fullTime?: string;

  @Field(() => String, { nullable: true })
  gender?: string;

  @Field(() => String, { nullable: true })
  grossCompensation?: string;

  @Field(() => String, { nullable: true })
  guid?: string;

  @Field(() => Boolean, { nullable: true })
  isOriginalRecord?: boolean;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  maritalStatus?: string;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => String, { nullable: true })
  payRate?: string;

  @Field(() => String, { nullable: true })
  personalEmail?: string;

  @Field(() => Int, { nullable: true })
  priorYearHours?: number;

  @Field(() => Int, { nullable: true })
  rothContribution?: number;

  @Field(() => String, { nullable: true })
  rothContributionType?: string;

  @Field(() => String, { nullable: true })
  socialSecurityNumber?: string;

  @Field(() => Int, { nullable: true })
  sponsorPlanId?: number;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  streetAddress1?: string;

  @Field(() => String, { nullable: true })
  streetAddress2?: string;

  @Field(() => String, { nullable: true })
  ucid?: string;

  @Field(() => Int, { nullable: true })
  yearsForVesting?: number;

  @Field(() => String, { nullable: true })
  zip?: string;
}

@InputType()
export class FindUniqueCensusRecordsDto {
  @Field(() => Int, { nullable: false })
  censusRecordsId: number;
}

@InputType()
export class UpdateDataCensusRecordsDto {
  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;

  @Field(() => String, { nullable: false })
  socialSecurityNumber: string;

  @Field(() => String, { nullable: false })
  lastName: string;

  @Field(() => String, { nullable: false })
  firstName: string;

  @Field(() => String, { nullable: true })
  gender?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  dateOfBirth?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  dateOfHire?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  dateOfRehire?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  dateOfTermination?: Date;

  @Field(() => String, { nullable: true })
  streetAddress1?: string;

  @Field(() => String, { nullable: true })
  streetAddress2?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  zip?: string;

  @Field(() => String, { nullable: true })
  division?: string;

  @Field(() => Int, { nullable: true })
  currentHours?: number;

  @Field(() => String, { nullable: true })
  maritalStatus?: string;

  @Field(() => String, { nullable: true })
  payRate?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => String, { nullable: true })
  fullTime?: string;

  @Field(() => String, { nullable: true })
  employmentType?: string;

  @Field(() => String, { nullable: true })
  grossCompensation?: string;

  @Field(() => String, { nullable: true })
  compensationType?: string;

  @Field(() => Boolean, { nullable: false })
  isOriginalRecord: boolean;

  @Field(() => Int, { nullable: true })
  priorYearHours?: number;

  @Field(() => String, { nullable: true })
  dateOfTerminationStrRec?: string;

  @Field(() => String, { nullable: true })
  dateOfHireStrRec?: string;

  @Field(() => String, { nullable: true })
  dateOfRehireStrRec?: string;

  @Field(() => String, { nullable: true })
  dateOfBirthStrRec?: string;

  @Field(() => String, { nullable: true })
  personalEmail?: string;

  @Field(() => String, { nullable: true })
  guid?: string;

  @Field(() => String, { nullable: true })
  ein?: string;

  @Field(() => Int, { nullable: true })
  yearsForVesting?: number;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => Int, { nullable: true })
  contribution?: number;

  @Field(() => String, { nullable: true })
  contributionType?: string;

  @Field(() => Int, { nullable: true })
  rothContribution?: number;

  @Field(() => String, { nullable: true })
  rothContributionType?: string;

  @Field(() => Int, { nullable: true })
  afterTaxContribution?: number;

  @Field(() => String, { nullable: true })
  afterTaxContributionType?: string;

  @Field(() => Boolean, { nullable: false })
  blockRoth: boolean;

  @Field(() => Boolean, { nullable: false })
  blockNonRoth: boolean;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => String, { nullable: true })
  ucid?: string;

  @Field(() => String, { nullable: true })
  externalId?: string;

  @Field(() => Float, { nullable: true })
  annualSalary?: number;
}

@InputType()
export class UpdateWhereCensusRecordsDto {
  @Field(() => Int, { nullable: false })
  censusRecordsId: number;
}
