import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Advisor {
  @Field(() => Int)
  advisorId: number

  @Field(() => String)
  phone?: string

  @Field(() => String)
  email?: string

  @Field(() => String)
  companyName?: string

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
  password?: string

  @Field(() => Date)
  applicationDate?: Date

  @Field(() => Date)
  activationDate?: Date

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field(() => String)
  advisorType?: string

  @Field(() => Int)
  firmId?: number

  @Field(() => String)
  homeOfficeName?: string

  @Field(() => String)
  firstName?: string

  @Field(() => String)
  lastName?: string

  @Field(() => String)
  subDomain?: string

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

  @Field(() => String)
  companyEntityType?: string

  @Field(() => String)
  primaryContactPhone?: string

  @Field(() => String)
  primaryContactEmail?: string

  @Field(() => String)
  secondaryContactName?: string

  @Field(() => String)
  secondaryContactPhone?: string

  @Field(() => String)
  secondaryContactEmail?: string

  @Field(() => Boolean)
  virtualAdvisor?: Date

  @Field(() => String)
  companySize?: string

  @Field(() => String)
  primaryContactName?: string

  @Field(() => String)
  repNumber?: string

  @Field(() => String)
  crdNumber?: string

  @Field(() => String)
  status?: string

  @Field(() => String)
  doingBusinessAs?: string

  @Field()
  advisorActivation: string

  @Field()
  advisorRegistrationStatus: string

  @Field()
  advisorsponsorPlan: string

  @Field()
  model: string

  @Field()
  userRolesAdvisor: string
}
