import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateParticipantDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  activationDate?: Date;

  @Field(() => String, { nullable: true })
  address1?: string;

  @Field(() => String, { nullable: true })
  address2?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  addressUpdatedAt?: Date;

  @Field(() => Int, { nullable: true })
  afterTaxContribution?: number;

  @Field(() => String, { nullable: true })
  afterTaxContributionType?: string;

  @Field(() => Boolean, { nullable: true })
  autorebalance?: boolean;

  @Field(() => String, { nullable: true })
  beneficiaryAddress1?: string;

  @Field(() => String, { nullable: true })
  beneficiaryAddress2?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  beneficiaryBirthDate?: Date;

  @Field(() => String, { nullable: true })
  beneficiaryCity?: string;

  @Field(() => String, { nullable: true })
  beneficiaryEmail?: string;

  @Field(() => String, { nullable: true })
  beneficiaryFirstName?: string;

  @Field(() => String, { nullable: true })
  beneficiaryLastName?: string;

  @Field(() => String, { nullable: true })
  beneficiaryPhone?: string;

  @Field(() => String, { nullable: true })
  beneficiaryRelationship?: string;

  @Field(() => String, { nullable: true })
  beneficiarySocialSecurityNumber?: string;

  @Field(() => String, { nullable: true })
  beneficiaryState?: string;

  @Field(() => String, { nullable: true })
  beneficiaryZip?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  birthDate?: Date;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => Boolean, { nullable: true })
  contributesToRoth?: boolean;

  @Field(() => Int, { nullable: true })
  contribution?: number;

  @Field(() => String, { nullable: true })
  contributionType?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => Boolean, { nullable: true })
  deferralChanged?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  emailUpdatedAt?: Date;

  @Field(() => String, { nullable: true })
  externalId?: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  gender?: string;

  @Field(() => Boolean, { nullable: false })
  isDeceased: boolean;

  @Field(() => Boolean, { nullable: false })
  isDisabled: boolean;

  @Field(() => Boolean, { nullable: true })
  isVerified?: boolean;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  maritalStatus?: string;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  nameUpdatedAt?: Date;

  @Field(() => Int, { nullable: false })
  participantId: number;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  personalEmail?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => Int, { nullable: true })
  riskValue?: number;

  @Field(() => Int, { nullable: true })
  rothContribution?: number;

  @Field(() => String, { nullable: true })
  rothContributionType?: string;

  @Field(() => String, { nullable: true })
  savesForRetirement?: string;

  @Field(() => Boolean, { nullable: true })
  sendEmailUpdate?: boolean;

  @Field(() => String, { nullable: true })
  socialSecurityNumber?: string;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  stateIraAccountStatus?: string;

  @Field(() => String, { nullable: true })
  stateIraCipStatus?: string;

  @Field(() => String, { nullable: true })
  stateIraPerEmployerStatus?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => GraphQLJSONObject, { nullable: true })
  updatedBy?: Record<string, unknown>;

  @Field(() => String, { nullable: true })
  workEmail?: string;

  @Field(() => Int, { nullable: true })
  yearsToRetire?: number;

  @Field(() => String, { nullable: true })
  zip?: string;
}

@InputType()
export class DeleteParticipantDto {
  @Field(() => Int, { nullable: false })
  participantId: number;
}

@InputType()
export class FindManyParticipantDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  activationDate?: Date;

  @Field(() => String, { nullable: true })
  address1?: string;

  @Field(() => String, { nullable: true })
  address2?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  addressUpdatedAt?: Date;

  @Field(() => Int, { nullable: true })
  afterTaxContribution?: number;

  @Field(() => String, { nullable: true })
  afterTaxContributionType?: string;

  @Field(() => Boolean, { nullable: true })
  autorebalance?: boolean;

  @Field(() => String, { nullable: true })
  beneficiaryAddress1?: string;

  @Field(() => String, { nullable: true })
  beneficiaryAddress2?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  beneficiaryBirthDate?: Date;

  @Field(() => String, { nullable: true })
  beneficiaryCity?: string;

  @Field(() => String, { nullable: true })
  beneficiaryEmail?: string;

  @Field(() => String, { nullable: true })
  beneficiaryFirstName?: string;

  @Field(() => String, { nullable: true })
  beneficiaryLastName?: string;

  @Field(() => String, { nullable: true })
  beneficiaryPhone?: string;

  @Field(() => String, { nullable: true })
  beneficiaryRelationship?: string;

  @Field(() => String, { nullable: true })
  beneficiarySocialSecurityNumber?: string;

  @Field(() => String, { nullable: true })
  beneficiaryState?: string;

  @Field(() => String, { nullable: true })
  beneficiaryZip?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  birthDate?: Date;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => Boolean, { nullable: true })
  contributesToRoth?: boolean;

  @Field(() => Int, { nullable: true })
  contribution?: number;

  @Field(() => String, { nullable: true })
  contributionType?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Boolean, { nullable: true })
  deferralChanged?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  emailUpdatedAt?: Date;

  @Field(() => String, { nullable: true })
  externalId?: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  gender?: string;

  @Field(() => Boolean, { nullable: true })
  isDeceased?: boolean;

  @Field(() => Boolean, { nullable: true })
  isDisabled?: boolean;

  @Field(() => Boolean, { nullable: true })
  isVerified?: boolean;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  maritalStatus?: string;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  nameUpdatedAt?: Date;

  @Field(() => Int, { nullable: true })
  participantId?: number;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  personalEmail?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => Int, { nullable: true })
  riskValue?: number;

  @Field(() => Int, { nullable: true })
  rothContribution?: number;

  @Field(() => String, { nullable: true })
  rothContributionType?: string;

  @Field(() => String, { nullable: true })
  savesForRetirement?: string;

  @Field(() => Boolean, { nullable: true })
  sendEmailUpdate?: boolean;

  @Field(() => String, { nullable: true })
  socialSecurityNumber?: string;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  stateIraAccountStatus?: string;

  @Field(() => String, { nullable: true })
  stateIraCipStatus?: string;

  @Field(() => String, { nullable: true })
  stateIraPerEmployerStatus?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;

  @Field(() => GraphQLJSONObject, { nullable: true })
  updatedBy?: Record<string, unknown>;

  @Field(() => String, { nullable: true })
  workEmail?: string;

  @Field(() => Int, { nullable: true })
  yearsToRetire?: number;

  @Field(() => String, { nullable: true })
  zip?: string;
}

@InputType()
export class FindUniqueParticipantDto {
  @Field(() => Int, { nullable: false })
  participantId: number;
}

@InputType()
export class UpdateDataParticipantDto {
  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  middleName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  socialSecurityNumber?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  birthDate?: Date;

  @Field(() => String, { nullable: true })
  address1?: string;

  @Field(() => String, { nullable: true })
  address2?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  zip?: string;

  @Field(() => String, { nullable: true })
  gender?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  workEmail?: string;

  @Field(() => String, { nullable: true })
  savesForRetirement?: string;

  @Field(() => Int, { nullable: true })
  contribution?: number;

  @Field(() => Int, { nullable: true })
  riskValue?: number;

  @Field(() => String, { nullable: true })
  maritalStatus?: string;

  @Field(() => String, { nullable: true })
  beneficiaryFirstName?: string;

  @Field(() => String, { nullable: true })
  beneficiaryLastName?: string;

  @Field(() => String, { nullable: true })
  beneficiarySocialSecurityNumber?: string;

  @Field(() => String, { nullable: true })
  beneficiaryRelationship?: string;

  @Field(() => String, { nullable: true })
  beneficiaryPhone?: string;

  @Field(() => String, { nullable: true })
  beneficiaryEmail?: string;

  @Field(() => Boolean, { nullable: true })
  sendEmailUpdate?: boolean;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  contributionType?: string;

  @Field(() => Int, { nullable: true })
  rothContribution?: number;

  @Field(() => String, { nullable: true })
  rothContributionType?: string;

  @Field(() => Boolean, { nullable: true })
  contributesToRoth?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  activationDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  beneficiaryAddress1?: string;

  @Field(() => String, { nullable: true })
  beneficiaryAddress2?: string;

  @Field(() => String, { nullable: true })
  beneficiaryCity?: string;

  @Field(() => String, { nullable: true })
  beneficiaryState?: string;

  @Field(() => String, { nullable: true })
  beneficiaryZip?: string;

  @Field(() => String, { nullable: true })
  personalEmail?: string;

  @Field(() => Int, { nullable: true })
  yearsToRetire?: number;

  @Field(() => Boolean, { nullable: true })
  deferralChanged?: boolean;

  @Field(() => Boolean, { nullable: true })
  autorebalance?: boolean;

  @Field(() => Int, { nullable: true })
  afterTaxContribution?: number;

  @Field(() => String, { nullable: true })
  afterTaxContributionType?: string;

  @Field(() => String, { nullable: true })
  country?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  beneficiaryBirthDate?: Date;

  @Field(() => Boolean, { nullable: false })
  isDeceased: boolean;

  @Field(() => Boolean, { nullable: false })
  isDisabled: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  nameUpdatedAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  addressUpdatedAt?: Date;

  @Field(() => Boolean, { nullable: true })
  isVerified?: boolean;

  @Field(() => GraphQLJSONObject, { nullable: true })
  updatedBy?: Record<string, unknown>;

  @Field(() => String, { nullable: true })
  externalId?: string;

  @Field(() => String, { nullable: true })
  stateIraAccountStatus?: string;

  @Field(() => String, { nullable: true })
  stateIraPerEmployerStatus?: string;

  @Field(() => String, { nullable: true })
  stateIraCipStatus?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  emailUpdatedAt?: Date;
}

@InputType()
export class UpdateWhereParticipantDto {
  @Field(() => Int, { nullable: false })
  participantId: number;
}
