import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateSponsorPlanDto {
  @Field(() => String, { nullable: true })
  adminStatus?: string;

  @Field(() => String, { nullable: true })
  adoptionAgreementProvider?: string;

  @Field(() => Int, { nullable: true })
  ageRequirement?: number;

  @Field(() => Boolean, { nullable: true })
  allowAfterTaxContribution?: boolean;

  @Field(() => Boolean, { nullable: true })
  allowEligibilityOverride?: boolean;

  @Field(() => String, { nullable: true })
  allowLoans?: string;

  @Field(() => Boolean, { nullable: true })
  allowPretaxContribution?: boolean;

  @Field(() => Boolean, { nullable: true })
  allowQnecQmac?: boolean;

  @Field(() => String, { nullable: true })
  allowRollover?: string;

  @Field(() => Boolean, { nullable: false })
  allowRothIraContribution: boolean;

  @Field(() => Boolean, { nullable: true })
  allowSafeHarborMatch?: boolean;

  @Field(() => Boolean, { nullable: true })
  allowSafeHarborNonElective?: boolean;

  @Field(() => Int, { nullable: true })
  assetsAtPriorProvider?: number;

  @Field(() => Boolean, { nullable: true })
  autoEnroll?: boolean;

  @Field(() => Int, { nullable: true })
  autoEnrollAmount?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  autoEnrollEffectiveDate?: Date;

  @Field(() => Boolean, { nullable: true })
  autoEscalate?: boolean;

  @Field(() => Int, { nullable: true })
  autoEscalateAmount?: number;

  @Field(() => Int, { nullable: true })
  autoEscalateCeiling?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  blackoutEndDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  blackoutStartDate?: Date;

  @Field(() => String, { nullable: true })
  contributionFormula?: string;

  @Field(() => String, { nullable: true })
  contributionType?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => Int, { nullable: true })
  csmId?: number;

  @Field(() => String, { nullable: true })
  custodianAccountNumber?: string;

  @Field(() => String, { nullable: true })
  customClassification1?: string;

  @Field(() => String, { nullable: true })
  customClassification2?: string;

  @Field(() => String, { nullable: true })
  customClassification3?: string;

  @Field(() => String, { nullable: true })
  customClassification4?: string;

  @Field(() => Boolean, { nullable: true })
  customClassificationSeparate?: boolean;

  @Field(() => Boolean, { nullable: true })
  deferInDollars?: boolean;

  @Field(() => Float, { nullable: true })
  earlyRetirementAge?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  effectivePlanDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  eligibilityOverrideStartDate?: Date;

  @Field(() => String, { nullable: true })
  eligibilityType?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  endDate?: Date;

  @Field(() => Boolean, { nullable: false })
  excludeLeasedEmployees: boolean;

  @Field(() => String, { nullable: true })
  externalHardDollarBillingAccountNumber?: string;

  @Field(() => String, { nullable: true })
  externalSponsorPlanId?: string;

  @Field(() => Int, { nullable: true })
  feesContainerId?: number;

  @Field(() => Boolean, { nullable: true })
  hasPriorLoans?: boolean;

  @Field(() => String, { nullable: true })
  hourType?: string;

  @Field(() => Int, { nullable: true })
  hoursRequirement?: number;

  @Field(() => String, { nullable: true })
  investmentStructure?: string;

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => Boolean, { nullable: true })
  isConversion?: boolean;

  @Field(() => Boolean, { nullable: true })
  isEarlyRetirementAllowed?: boolean;

  @Field(() => Boolean, { nullable: true })
  isEmployerContribution?: boolean;

  @Field(() => Boolean, { nullable: true })
  isEmployerMatching?: boolean;

  @Field(() => Boolean, { nullable: true })
  isHardshipDistributionAllowed?: boolean;

  @Field(() => Boolean, { nullable: true })
  isHardshipProofRequired?: boolean;

  @Field(() => Boolean, { nullable: true })
  isNonSafeHarborEmployerContr?: boolean;

  @Field(() => Boolean, { nullable: true })
  isProfitSharing?: boolean;

  @Field(() => Boolean, { nullable: true })
  isSafeHarbor?: boolean;

  @Field(() => Boolean, { nullable: true })
  isSalaryRothDeferral?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  liquidationDate?: Date;

  @Field(() => String, { nullable: true })
  matchFrequency?: string;

  @Field(() => String, { nullable: true })
  nonSafeHarborContributionType?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  nonSafeHarborEffectiveDate?: Date;

  @Field(() => String, { nullable: true })
  notes?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  originalEffectivePlanDate?: Date;

  @Field(() => String, { nullable: true })
  participantEntryMethod?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  pendingAmendmentEffectiveDate?: Date;

  @Field(() => String, { nullable: true })
  pendingAmendmentNotes?: string;

  @Field(() => String, { nullable: true })
  planName?: string;

  @Field(() => String, { nullable: true })
  planNumber?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  planParticipantEntryDate?: Date;

  @Field(() => String, { nullable: true })
  planType?: string;

  @Field(() => String, { nullable: true })
  planYear?: string;

  @Field(() => String, { nullable: true })
  priorProvider?: string;

  @Field(() => String, { nullable: true })
  priorTpa?: string;

  @Field(() => Int, { nullable: true })
  profitSharingEligibilityHours?: number;

  @Field(() => String, { nullable: true })
  profitSharingEligibilityType?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  profitSharingStartDate?: Date;

  @Field(() => String, { nullable: true })
  profitSharingStrategy?: string;

  @Field(() => Int, { nullable: true })
  recordkeeperId?: number;

  @Field(() => Int, { nullable: true })
  relationshipManagerId?: number;

  @Field(() => Boolean, { nullable: true })
  rollOver?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  safeHarborEffectiveDate?: Date;

  @Field(() => String, { nullable: true })
  safeHarborStrategy?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  salaryRothDeferralEffectiveDate?: Date;

  @Field(() => String, { nullable: true })
  serviceLevel?: string;

  @Field(() => String, { nullable: true })
  serviceRequirement?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  specialParticipationDate?: Date;

  @Field(() => Int, { nullable: true })
  sponsorId?: number;

  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  startDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  terminationDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;
}

@InputType()
export class DeleteSponsorPlanDto {
  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;
}

@InputType()
export class FindManySponsorPlanDto {
  @Field(() => String, { nullable: true })
  adminStatus?: string;

  @Field(() => String, { nullable: true })
  adoptionAgreementProvider?: string;

  @Field(() => Int, { nullable: true })
  ageRequirement?: number;

  @Field(() => Boolean, { nullable: true })
  allowAfterTaxContribution?: boolean;

  @Field(() => Boolean, { nullable: true })
  allowEligibilityOverride?: boolean;

  @Field(() => String, { nullable: true })
  allowLoans?: string;

  @Field(() => Boolean, { nullable: true })
  allowPretaxContribution?: boolean;

  @Field(() => Boolean, { nullable: true })
  allowQnecQmac?: boolean;

  @Field(() => String, { nullable: true })
  allowRollover?: string;

  @Field(() => Boolean, { nullable: true })
  allowRothIraContribution?: boolean;

  @Field(() => Boolean, { nullable: true })
  allowSafeHarborMatch?: boolean;

  @Field(() => Boolean, { nullable: true })
  allowSafeHarborNonElective?: boolean;

  @Field(() => Int, { nullable: true })
  assetsAtPriorProvider?: number;

  @Field(() => Boolean, { nullable: true })
  autoEnroll?: boolean;

  @Field(() => Int, { nullable: true })
  autoEnrollAmount?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  autoEnrollEffectiveDate?: Date;

  @Field(() => Boolean, { nullable: true })
  autoEscalate?: boolean;

  @Field(() => Int, { nullable: true })
  autoEscalateAmount?: number;

  @Field(() => Int, { nullable: true })
  autoEscalateCeiling?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  blackoutEndDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  blackoutStartDate?: Date;

  @Field(() => String, { nullable: true })
  contributionFormula?: string;

  @Field(() => String, { nullable: true })
  contributionType?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  csmId?: number;

  @Field(() => String, { nullable: true })
  custodianAccountNumber?: string;

  @Field(() => String, { nullable: true })
  customClassification1?: string;

  @Field(() => String, { nullable: true })
  customClassification2?: string;

  @Field(() => String, { nullable: true })
  customClassification3?: string;

  @Field(() => String, { nullable: true })
  customClassification4?: string;

  @Field(() => Boolean, { nullable: true })
  customClassificationSeparate?: boolean;

  @Field(() => Boolean, { nullable: true })
  deferInDollars?: boolean;

  @Field(() => Float, { nullable: true })
  earlyRetirementAge?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  effectivePlanDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  eligibilityOverrideStartDate?: Date;

  @Field(() => String, { nullable: true })
  eligibilityType?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  endDate?: Date;

  @Field(() => Boolean, { nullable: true })
  excludeLeasedEmployees?: boolean;

  @Field(() => String, { nullable: true })
  externalHardDollarBillingAccountNumber?: string;

  @Field(() => String, { nullable: true })
  externalSponsorPlanId?: string;

  @Field(() => Int, { nullable: true })
  feesContainerId?: number;

  @Field(() => Boolean, { nullable: true })
  hasPriorLoans?: boolean;

  @Field(() => String, { nullable: true })
  hourType?: string;

  @Field(() => Int, { nullable: true })
  hoursRequirement?: number;

  @Field(() => String, { nullable: true })
  investmentStructure?: string;

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => Boolean, { nullable: true })
  isConversion?: boolean;

  @Field(() => Boolean, { nullable: true })
  isEarlyRetirementAllowed?: boolean;

  @Field(() => Boolean, { nullable: true })
  isEmployerContribution?: boolean;

  @Field(() => Boolean, { nullable: true })
  isEmployerMatching?: boolean;

  @Field(() => Boolean, { nullable: true })
  isHardshipDistributionAllowed?: boolean;

  @Field(() => Boolean, { nullable: true })
  isHardshipProofRequired?: boolean;

  @Field(() => Boolean, { nullable: true })
  isNonSafeHarborEmployerContr?: boolean;

  @Field(() => Boolean, { nullable: true })
  isProfitSharing?: boolean;

  @Field(() => Boolean, { nullable: true })
  isSafeHarbor?: boolean;

  @Field(() => Boolean, { nullable: true })
  isSalaryRothDeferral?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  liquidationDate?: Date;

  @Field(() => String, { nullable: true })
  matchFrequency?: string;

  @Field(() => String, { nullable: true })
  nonSafeHarborContributionType?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  nonSafeHarborEffectiveDate?: Date;

  @Field(() => String, { nullable: true })
  notes?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  originalEffectivePlanDate?: Date;

  @Field(() => String, { nullable: true })
  participantEntryMethod?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  pendingAmendmentEffectiveDate?: Date;

  @Field(() => String, { nullable: true })
  pendingAmendmentNotes?: string;

  @Field(() => String, { nullable: true })
  planName?: string;

  @Field(() => String, { nullable: true })
  planNumber?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  planParticipantEntryDate?: Date;

  @Field(() => String, { nullable: true })
  planType?: string;

  @Field(() => String, { nullable: true })
  planYear?: string;

  @Field(() => String, { nullable: true })
  priorProvider?: string;

  @Field(() => String, { nullable: true })
  priorTpa?: string;

  @Field(() => Int, { nullable: true })
  profitSharingEligibilityHours?: number;

  @Field(() => String, { nullable: true })
  profitSharingEligibilityType?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  profitSharingStartDate?: Date;

  @Field(() => String, { nullable: true })
  profitSharingStrategy?: string;

  @Field(() => Int, { nullable: true })
  recordkeeperId?: number;

  @Field(() => Int, { nullable: true })
  relationshipManagerId?: number;

  @Field(() => Boolean, { nullable: true })
  rollOver?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  safeHarborEffectiveDate?: Date;

  @Field(() => String, { nullable: true })
  safeHarborStrategy?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  salaryRothDeferralEffectiveDate?: Date;

  @Field(() => String, { nullable: true })
  serviceLevel?: string;

  @Field(() => String, { nullable: true })
  serviceRequirement?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  specialParticipationDate?: Date;

  @Field(() => Int, { nullable: true })
  sponsorId?: number;

  @Field(() => Int, { nullable: true })
  sponsorPlanId?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  startDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  terminationDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;
}

@InputType()
export class FindUniqueSponsorPlanDto {
  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;
}

@InputType()
export class UpdateDataSponsorPlanDto {
  @Field(() => Int, { nullable: true })
  sponsorId?: number;

  @Field(() => Boolean, { nullable: true })
  isSafeHarbor?: boolean;

  @Field(() => String, { nullable: true })
  safeHarborStrategy?: string;

  @Field(() => String, { nullable: true })
  contributionFormula?: string;

  @Field(() => Boolean, { nullable: true })
  isProfitSharing?: boolean;

  @Field(() => String, { nullable: true })
  profitSharingStrategy?: string;

  @Field(() => String, { nullable: true })
  customClassification1?: string;

  @Field(() => String, { nullable: true })
  customClassification2?: string;

  @Field(() => String, { nullable: true })
  customClassification3?: string;

  @Field(() => String, { nullable: true })
  customClassification4?: string;

  @Field(() => Boolean, { nullable: true })
  customClassificationSeparate?: boolean;

  @Field(() => Boolean, { nullable: true })
  rollOver?: boolean;

  @Field(() => String, { nullable: true })
  allowLoans?: string;

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  effectivePlanDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  originalEffectivePlanDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  eligibilityOverrideStartDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => Boolean, { nullable: true })
  isEmployerMatching?: boolean;

  @Field(() => String, { nullable: true })
  planNumber?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  safeHarborEffectiveDate?: Date;

  @Field(() => String, { nullable: true })
  eligibilityType?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  planParticipantEntryDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  nonSafeHarborEffectiveDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  salaryRothDeferralEffectiveDate?: Date;

  @Field(() => Boolean, { nullable: true })
  isNonSafeHarborEmployerContr?: boolean;

  @Field(() => Boolean, { nullable: true })
  isSalaryRothDeferral?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  profitSharingStartDate?: Date;

  @Field(() => Boolean, { nullable: true })
  allowEligibilityOverride?: boolean;

  @Field(() => String, { nullable: true })
  nonSafeHarborContributionType?: string;

  @Field(() => String, { nullable: true })
  contributionType?: string;

  @Field(() => String, { nullable: true })
  participantEntryMethod?: string;

  @Field(() => Int, { nullable: true })
  profitSharingEligibilityHours?: number;

  @Field(() => String, { nullable: true })
  profitSharingEligibilityType?: string;

  @Field(() => Boolean, { nullable: true })
  isConversion?: boolean;

  @Field(() => Boolean, { nullable: true })
  isEmployerContribution?: boolean;

  @Field(() => String, { nullable: true })
  planName?: string;

  @Field(() => Boolean, { nullable: true })
  autoEnroll?: boolean;

  @Field(() => Int, { nullable: true })
  autoEnrollAmount?: number;

  @Field(() => String, { nullable: true })
  planType?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  startDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  endDate?: Date;

  @Field(() => String, { nullable: true })
  externalSponsorPlanId?: string;

  @Field(() => String, { nullable: true })
  investmentStructure?: string;

  @Field(() => String, { nullable: true })
  priorProvider?: string;

  @Field(() => String, { nullable: true })
  priorTpa?: string;

  @Field(() => Int, { nullable: true })
  assetsAtPriorProvider?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  specialParticipationDate?: Date;

  @Field(() => String, { nullable: true })
  hourType?: string;

  @Field(() => Int, { nullable: true })
  ageRequirement?: number;

  @Field(() => String, { nullable: true })
  serviceRequirement?: string;

  @Field(() => Int, { nullable: true })
  hoursRequirement?: number;

  @Field(() => Int, { nullable: true })
  feesContainerId?: number;

  @Field(() => String, { nullable: true })
  planYear?: string;

  @Field(() => String, { nullable: true })
  adminStatus?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  terminationDate?: Date;

  @Field(() => String, { nullable: true })
  notes?: string;

  @Field(() => Int, { nullable: true })
  autoEscalateAmount?: number;

  @Field(() => Boolean, { nullable: false })
  excludeLeasedEmployees: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  blackoutStartDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  blackoutEndDate?: Date;

  @Field(() => String, { nullable: true })
  custodianAccountNumber?: string;

  @Field(() => String, { nullable: true })
  adoptionAgreementProvider?: string;

  @Field(() => Boolean, { nullable: true })
  deferInDollars?: boolean;

  @Field(() => Boolean, { nullable: true })
  autoEscalate?: boolean;

  @Field(() => Int, { nullable: true })
  autoEscalateCeiling?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  autoEnrollEffectiveDate?: Date;

  @Field(() => Int, { nullable: true })
  recordkeeperId?: number;

  @Field(() => Boolean, { nullable: true })
  allowPretaxContribution?: boolean;

  @Field(() => Boolean, { nullable: true })
  allowAfterTaxContribution?: boolean;

  @Field(() => Boolean, { nullable: true })
  allowSafeHarborMatch?: boolean;

  @Field(() => Boolean, { nullable: true })
  allowSafeHarborNonElective?: boolean;

  @Field(() => Boolean, { nullable: true })
  allowQnecQmac?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  liquidationDate?: Date;

  @Field(() => Boolean, { nullable: true })
  isHardshipDistributionAllowed?: boolean;

  @Field(() => Boolean, { nullable: true })
  isEarlyRetirementAllowed?: boolean;

  @Field(() => Float, { nullable: true })
  earlyRetirementAge?: number;

  @Field(() => Boolean, { nullable: true })
  isHardshipProofRequired?: boolean;

  @Field(() => Boolean, { nullable: true })
  hasPriorLoans?: boolean;

  @Field(() => String, { nullable: true })
  matchFrequency?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  pendingAmendmentEffectiveDate?: Date;

  @Field(() => String, { nullable: true })
  pendingAmendmentNotes?: string;

  @Field(() => Int, { nullable: true })
  csmId?: number;

  @Field(() => String, { nullable: true })
  externalHardDollarBillingAccountNumber?: string;

  @Field(() => String, { nullable: true })
  serviceLevel?: string;

  @Field(() => String, { nullable: true })
  allowRollover?: string;

  @Field(() => Int, { nullable: true })
  relationshipManagerId?: number;

  @Field(() => Boolean, { nullable: false })
  allowRothIraContribution: boolean;
}

@InputType()
export class UpdateWhereSponsorPlanDto {
  @Field(() => Int, { nullable: false })
  sponsorPlanId: number;
}
