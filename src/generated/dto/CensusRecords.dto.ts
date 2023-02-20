import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CensusRecords {
  @Field(() => Int)
  censusRecordsId: number

  @Field(() => Int)
  sponsorPlanId: number

  @Field(() => String)
  socialSecurityNumber: string

  @Field(() => String)
  lastName: string

  @Field(() => String)
  firstName: string

  @Field(() => String)
  gender?: string

  @Field(() => Date)
  dateOfBirth?: Date

  @Field(() => Date)
  dateOfHire?: Date

  @Field(() => Date)
  dateOfRehire?: Date

  @Field(() => Date)
  dateOfTermination?: Date

  @Field(() => String)
  streetAddress1?: string

  @Field(() => String)
  streetAddress2?: string

  @Field(() => String)
  city?: string

  @Field(() => String)
  state?: string

  @Field(() => String)
  zip?: string

  @Field(() => String)
  division?: string

  @Field(() => Int)
  currentHours?: number

  @Field(() => String)
  maritalStatus?: string

  @Field(() => String)
  payRate?: string

  @Field(() => String)
  email?: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => String)
  fullTime?: string

  @Field(() => String)
  employmentType?: string

  @Field(() => String)
  grossCompensation?: string

  @Field(() => String)
  compensationType?: string

  @Field(() => Boolean)
  isOriginalRecord: Date

  @Field(() => Int)
  priorYearHours?: number

  @Field(() => String)
  dateOfTerminationStrRec?: string

  @Field(() => String)
  dateOfHireStrRec?: string

  @Field(() => String)
  dateOfRehireStrRec?: string

  @Field(() => String)
  dateOfBirthStrRec?: string

  @Field(() => String)
  personalEmail?: string

  @Field(() => String)
  guid?: string

  @Field(() => String)
  ein?: string

  @Field(() => Int)
  yearsForVesting?: number

  @Field(() => String)
  middleName?: string

  @Field(() => Int)
  contribution?: number

  @Field(() => String)
  contributionType?: string

  @Field(() => Int)
  rothContribution?: number

  @Field(() => String)
  rothContributionType?: string

  @Field(() => Int)
  afterTaxContribution?: number

  @Field(() => String)
  afterTaxContributionType?: string

  @Field(() => Boolean)
  blockRoth: Date

  @Field(() => Boolean)
  blockNonRoth: Date

  @Field(() => String)
  country?: string

  @Field(() => String)
  ucid?: string

  @Field(() => String)
  externalId?: string

  @Field()
  annualSalary?: string

  @Field()
  sponsorPlan: string
}
