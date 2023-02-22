import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class Sponsor {
  @Field(() => Int, { nullable: false })
  sponsorId: number;

  @Field(() => String, { nullable: true })
  primaryContactRole?: string;

  @Field(() => String, { nullable: true })
  primaryContactPhone?: string;

  @Field(() => String, { nullable: true })
  primaryContactEmail?: string;

  @Field(() => String, { nullable: true })
  companyName?: string;

  @Field(() => String, { nullable: true })
  companySize?: string;

  @Field(() => String, { nullable: true })
  companyPhoneNumber?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  companyInceptionDate?: Date;

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
  isConvert?: string;

  @Field(() => Boolean, { nullable: true })
  isPayrollConnected?: boolean;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  activationDate?: Date;

  @Field(() => String, { nullable: true })
  doingBusinessAs?: string;

  @Field(() => String, { nullable: true })
  employerIdentificationNumber?: string;

  @Field(() => String, { nullable: true })
  companyEntityType?: string;

  @Field(() => String, { nullable: true })
  standardIndustrialClassification?: string;

  @Field(() => String, { nullable: true })
  companyBillingEmail?: string;

  @Field(() => String, { nullable: true })
  fiscalYearEnd?: string;

  @Field(() => String, { nullable: true })
  secondaryContactName?: string;

  @Field(() => String, { nullable: true })
  secondaryContactRole?: string;

  @Field(() => String, { nullable: true })
  secondaryContactPhone?: string;

  @Field(() => String, { nullable: true })
  secondaryContactEmail?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  stateOfIncorporation?: string;

  @Field(() => String, { nullable: true })
  identificationType?: string;

  @Field(() => String, { nullable: true })
  identificationIssueState?: string;

  @Field(() => String, { nullable: true })
  identificationIssueCountry?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  identificationIssueDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  identificationExpirationDate?: Date;

  @Field(() => String, { nullable: true })
  citizenshipType?: string;

  @Field(() => String, { nullable: true })
  countryIfAlien?: string;

  @Field(() => String, { nullable: true })
  countryOfTaxResidence?: string;

  @Field(() => String, { nullable: true })
  foreignDignitaryCountry?: string;

  @Field(() => Boolean, { nullable: true })
  isForeignDignitary?: boolean;

  @Field(() => String, { nullable: true })
  identificationNumber?: string;

  @Field(() => Boolean, { nullable: true })
  hasFamilyMemberEmployees?: boolean;

  @Field(() => String, { nullable: true })
  otherBusinessesOwned?: string;

  @Field(() => Boolean, { nullable: true })
  hasOtherBusinesses?: boolean;

  @Field(() => String, { nullable: true })
  controlGroupBusinesses?: string;

  @Field(() => Boolean, { nullable: true })
  isPartOfControlGroup?: boolean;

  @Field(() => Boolean, { nullable: true })
  hasLeasedEmployees?: boolean;

  @Field(() => String, { nullable: true })
  primaryContactTitle?: string;

  @Field(() => Boolean, { nullable: true })
  hasHiddenPlanAgreements?: boolean;

  @Field(() => Int, { nullable: true })
  payrollProviderId?: number;

  @Field(() => String, { nullable: true })
  vestwellSalesContact?: string;

  @Field(() => String, { nullable: true })
  anticipatedAdvisor?: string;

  @Field(() => String, { nullable: true })
  anticipatedHomeOfficeAffiliation?: string;

  @Field(() => String, { nullable: true })
  anticipatedAdvisorGroup?: string;

  @Field(() => String, { nullable: true })
  dayToDayContactName?: string;

  @Field(() => String, { nullable: true })
  dayToDayContactNumber?: string;

  @Field(() => String, { nullable: true })
  dayToDayContactEmail?: string;

  @Field(() => Boolean, { nullable: true })
  wiredAtWork?: boolean;

  @Field(() => Int, { nullable: true })
  estimatedAnnualContribution?: number;

  @Field(() => Boolean, { nullable: true })
  newOnboarding?: boolean;

  @Field(() => String, { nullable: true })
  hqCountry?: string;

  @Field(() => String, { nullable: true })
  primaryContactFirstName?: string;

  @Field(() => String, { nullable: true })
  primaryContactLastName?: string;
}
