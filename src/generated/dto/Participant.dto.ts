import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Participant {
  @Field(() => Int)
  participantId: number

  @Field(() => String)
  firstName?: string

  @Field(() => String)
  middleName?: string

  @Field(() => String)
  lastName?: string

  @Field(() => String)
  socialSecurityNumber?: string

  @Field(() => Date)
  birthDate?: Date

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
  gender?: string

  @Field(() => String)
  phone?: string

  @Field(() => String)
  workEmail?: string

  @Field(() => String)
  savesForRetirement?: string

  @Field(() => Int)
  contribution?: number

  @Field(() => Int)
  riskValue?: number

  @Field(() => String)
  maritalStatus?: string

  @Field(() => String)
  beneficiaryFirstName?: string

  @Field(() => String)
  beneficiaryLastName?: string

  @Field(() => String)
  beneficiarySocialSecurityNumber?: string

  @Field(() => String)
  beneficiaryRelationship?: string

  @Field(() => String)
  beneficiaryPhone?: string

  @Field(() => String)
  beneficiaryEmail?: string

  @Field(() => Boolean)
  sendEmailUpdate?: Date

  @Field(() => String)
  password?: string

  @Field(() => String)
  contributionType?: string

  @Field(() => Int)
  rothContribution?: number

  @Field(() => String)
  rothContributionType?: string

  @Field(() => Boolean)
  contributesToRoth?: Date

  @Field(() => Date)
  activationDate?: Date

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field(() => String)
  beneficiaryAddress1?: string

  @Field(() => String)
  beneficiaryAddress2?: string

  @Field(() => String)
  beneficiaryCity?: string

  @Field(() => String)
  beneficiaryState?: string

  @Field(() => String)
  beneficiaryZip?: string

  @Field(() => String)
  personalEmail?: string

  @Field(() => Int)
  yearsToRetire?: number

  @Field(() => Boolean)
  deferralChanged?: Date

  @Field(() => Boolean)
  autorebalance?: Date

  @Field(() => Int)
  afterTaxContribution?: number

  @Field(() => String)
  afterTaxContributionType?: string

  @Field(() => String)
  country?: string

  @Field(() => Date)
  beneficiaryBirthDate?: Date

  @Field(() => Boolean)
  isDeceased: Date

  @Field(() => Boolean)
  isDisabled: Date

  @Field(() => Date)
  nameUpdatedAt?: Date

  @Field(() => Date)
  addressUpdatedAt?: Date

  @Field(() => Boolean)
  isVerified?: Date

  @Field()
  updatedBy?: Record<string, unknown>

  @Field(() => String)
  externalId?: string

  @Field(() => String)
  stateIraAccountStatus?: string

  @Field(() => String)
  stateIraPerEmployerStatus?: string

  @Field(() => String)
  stateIraCipStatus?: string

  @Field(() => Date)
  emailUpdatedAt?: Date

  @Field()
  participantRegistrationStatus: string

  @Field()
  psa: string

  @Field()
  userRolesParticipant: string
}
