import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Firm {
  @Field(() => Int)
  firmId: number

  @Field(() => Boolean)
  allowOverride?: Date

  @Field(() => String)
  companyName?: string

  @Field(() => String)
  homeOfficeName?: string

  @Field(() => String)
  subDomain?: string

  @Field(() => String)
  loginSubDomain?: string

  @Field(() => String)
  cssFileName?: string

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
  logo?: string

  @Field(() => String)
  clientSupportStrategy?: string

  @Field()
  fee?: string

  @Field(() => String)
  businessDescription?: string

  @Field(() => String)
  disclaimers?: string

  @Field(() => Date)
  applicationDate?: Date

  @Field(() => Date)
  activationDate?: Date

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field(() => String)
  cssFolder?: string

  @Field(() => String)
  email?: string

  @Field(() => Boolean)
  isActive?: Date

  @Field(() => String)
  firmType?: string

  @Field(() => String)
  website?: string

  @Field(() => String)
  mainPhoneNumber?: string

  @Field()
  retirementPlanAssets?: string

  @Field(() => Int)
  advisorCount?: number

  @Field(() => String)
  contactName?: string

  @Field(() => Boolean)
  migratedFromFirm1?: Date

  @Field(() => String)
  externalFirmId?: string

  @Field()
  stateProgram: string
}
