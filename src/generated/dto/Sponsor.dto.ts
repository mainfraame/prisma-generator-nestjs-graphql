import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Sponsor {
  @Field(() => Int)
  sponsorId: number

  @Field(() => String)
  primaryContactRole?: string

  @Field(() => String)
  primaryContactPhone?: string

  @Field(() => String)
  primaryContactEmail?: string

  @Field(() => String)
  companyName?: string

  @Field(() => String)
  companySize?: string

  @Field(() => String)
  companyPhoneNumber?: string

  @Field(() => Date)
  companyInceptionDate?: Date

  @Field(() => String)
  address1?: string

  @Field(() => String)
  address2?: string

  @Field(() => String)
  city?: string

  @Field(() => String)
  state?: string

  @Field(() => String)
  zip?: string

  @Field(() => String)
  isConvert?: string

  @Field(() => Boolean)
  isPayrollConnected?: Date

  @Field(() => String)
  password?: string

  @Field(() => Date)
  activationDate?: Date

  @Field(() => String)
  doingBusinessAs?: string

  @Field(() => String)
  employerIdentificationNumber?: string

  @Field(() => String)
  companyEntityType?: string

  @Field(() => String)
  standardIndustrialClassification?: string

  @Field(() => String)
  companyBillingEmail?: string

  @Field(() => String)
  fiscalYearEnd?: string

  @Field(() => String)
  secondaryContactName?: string

  @Field(() => String)
  secondaryContactRole?: string

  @Field(() => String)
  secondaryContactPhone?: string

  @Field(() => String)
  secondaryContactEmail?: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field(() => String)
  stateOfIncorporation?: string

  @Field(() => String)
  identificationType?: string

  @Field(() => String)
  identificationIssueState?: string

  @Field(() => String)
  identificationIssueCountry?: string

  @Field(() => Date)
  identificationIssueDate?: Date

  @Field(() => Date)
  identificationExpirationDate?: Date

  @Field(() => String)
  citizenshipType?: string

  @Field(() => String)
  countryIfAlien?: string

  @Field(() => String)
  countryOfTaxResidence?: string

  @Field(() => String)
  foreignDignitaryCountry?: string

  @Field(() => Boolean)
  isForeignDignitary?: Date

  @Field(() => String)
  identificationNumber?: string

  @Field(() => Boolean)
  hasFamilyMemberEmployees?: Date

  @Field(() => String)
  otherBusinessesOwned?: string

  @Field(() => Boolean)
  hasOtherBusinesses?: Date

  @Field(() => String)
  controlGroupBusinesses?: string

  @Field(() => Boolean)
  isPartOfControlGroup?: Date

  @Field(() => Boolean)
  hasLeasedEmployees?: Date

  @Field(() => String)
  primaryContactTitle?: string

  @Field(() => Boolean)
  hasHiddenPlanAgreements?: Date

  @Field(() => Int)
  payrollProviderId?: number

  @Field(() => String)
  vestwellSalesContact?: string

  @Field(() => String)
  anticipatedAdvisor?: string

  @Field(() => String)
  anticipatedHomeOfficeAffiliation?: string

  @Field(() => String)
  anticipatedAdvisorGroup?: string

  @Field(() => String)
  dayToDayContactName?: string

  @Field(() => String)
  dayToDayContactNumber?: string

  @Field(() => String)
  dayToDayContactEmail?: string

  @Field(() => Boolean)
  wiredAtWork?: Date

  @Field(() => Int)
  estimatedAnnualContribution?: number

  @Field(() => Boolean)
  newOnboarding?: Date

  @Field(() => String)
  hqCountry?: string

  @Field(() => String)
  primaryContactFirstName?: string

  @Field(() => String)
  primaryContactLastName?: string

  @Field()
  sponsorActivation: string

  @Field()
  sponsorExemption: string

  @Field()
  sponsorPlan: string

  @Field()
  userRolesSponsor: string
}
