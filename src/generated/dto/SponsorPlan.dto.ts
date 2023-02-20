import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class SponsorPlan {
  @Field(() => Int)
  sponsorPlanId: number

  @Field(() => Int)
  sponsorId?: number

  @Field(() => Boolean)
  isSafeHarbor?: Date

  @Field(() => String)
  safeHarborStrategy?: string

  @Field(() => String)
  contributionFormula?: string

  @Field(() => Boolean)
  isProfitSharing?: Date

  @Field(() => String)
  profitSharingStrategy?: string

  @Field(() => String)
  customClassification1?: string

  @Field(() => String)
  customClassification2?: string

  @Field(() => String)
  customClassification3?: string

  @Field(() => String)
  customClassification4?: string

  @Field(() => Boolean)
  customClassificationSeparate?: Date

  @Field(() => Boolean)
  rollOver?: Date

  @Field(() => String)
  allowLoans?: string

  @Field(() => Boolean)
  isActive?: Date

  @Field(() => Date)
  effectivePlanDate?: Date

  @Field(() => Date)
  originalEffectivePlanDate?: Date

  @Field(() => Date)
  eligibilityOverrideStartDate?: Date

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field(() => Boolean)
  isEmployerMatching?: Date

  @Field(() => String)
  planNumber?: string

  @Field(() => Date)
  safeHarborEffectiveDate?: Date

  @Field(() => String)
  eligibilityType?: string

  @Field(() => Date)
  planParticipantEntryDate?: Date

  @Field(() => Date)
  nonSafeHarborEffectiveDate?: Date

  @Field(() => Date)
  salaryRothDeferralEffectiveDate?: Date

  @Field(() => Boolean)
  isNonSafeHarborEmployerContr?: Date

  @Field(() => Boolean)
  isSalaryRothDeferral?: Date

  @Field(() => Date)
  profitSharingStartDate?: Date

  @Field(() => Boolean)
  allowEligibilityOverride?: Date

  @Field(() => String)
  nonSafeHarborContributionType?: string

  @Field(() => String)
  contributionType?: string

  @Field(() => String)
  participantEntryMethod?: string

  @Field(() => Int)
  profitSharingEligibilityHours?: number

  @Field(() => String)
  profitSharingEligibilityType?: string

  @Field(() => Boolean)
  isConversion?: Date

  @Field(() => Boolean)
  isEmployerContribution?: Date

  @Field(() => String)
  planName?: string

  @Field(() => Boolean)
  autoEnroll?: Date

  @Field(() => Int)
  autoEnrollAmount?: number

  @Field(() => String)
  planType?: string

  @Field(() => Date)
  startDate?: Date

  @Field(() => Date)
  endDate?: Date

  @Field(() => String)
  externalSponsorPlanId?: string

  @Field(() => String)
  investmentStructure?: string

  @Field(() => String)
  priorProvider?: string

  @Field(() => String)
  priorTpa?: string

  @Field(() => Int)
  assetsAtPriorProvider?: number

  @Field(() => Date)
  specialParticipationDate?: Date

  @Field(() => String)
  hourType?: string

  @Field(() => Int)
  ageRequirement?: number

  @Field(() => String)
  serviceRequirement?: string

  @Field(() => Int)
  hoursRequirement?: number

  @Field(() => Int)
  feesContainerId?: number

  @Field(() => String)
  planYear?: string

  @Field(() => String)
  adminStatus?: string

  @Field(() => Date)
  terminationDate?: Date

  @Field(() => String)
  notes?: string

  @Field(() => Int)
  autoEscalateAmount?: number

  @Field(() => Boolean)
  excludeLeasedEmployees: Date

  @Field(() => Date)
  blackoutStartDate?: Date

  @Field(() => Date)
  blackoutEndDate?: Date

  @Field(() => String)
  custodianAccountNumber?: string

  @Field(() => String)
  adoptionAgreementProvider?: string

  @Field(() => Boolean)
  deferInDollars?: Date

  @Field(() => Boolean)
  autoEscalate?: Date

  @Field(() => Int)
  autoEscalateCeiling?: number

  @Field(() => Date)
  autoEnrollEffectiveDate?: Date

  @Field(() => Int)
  recordkeeperId?: number

  @Field(() => Boolean)
  allowPretaxContribution?: Date

  @Field(() => Boolean)
  allowAfterTaxContribution?: Date

  @Field(() => Boolean)
  allowSafeHarborMatch?: Date

  @Field(() => Boolean)
  allowSafeHarborNonElective?: Date

  @Field(() => Boolean)
  allowQnecQmac?: Date

  @Field(() => Date)
  liquidationDate?: Date

  @Field(() => Boolean)
  isHardshipDistributionAllowed?: Date

  @Field(() => Boolean)
  isEarlyRetirementAllowed?: Date

  @Field()
  earlyRetirementAge?: string

  @Field(() => Boolean)
  isHardshipProofRequired?: Date

  @Field(() => Boolean)
  hasPriorLoans?: Date

  @Field(() => String)
  matchFrequency?: string

  @Field(() => Date)
  pendingAmendmentEffectiveDate?: Date

  @Field(() => String)
  pendingAmendmentNotes?: string

  @Field(() => Int)
  csmId?: number

  @Field(() => String)
  externalHardDollarBillingAccountNumber?: string

  @Field(() => String)
  serviceLevel?: string

  @Field(() => String)
  allowRollover?: string

  @Field(() => Int)
  relationshipManagerId?: number

  @Field(() => Boolean)
  allowRothIraContribution: Date

  @Field()
  recordkeeper?: string

  @Field()
  sponsor?: string

  @Field()
  advisorsponsorPlan: string

  @Field()
  psa: string

  @Field()
  CensusRecords: string
}
