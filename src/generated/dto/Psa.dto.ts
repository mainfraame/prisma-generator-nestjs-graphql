import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Psa {
  @Field(() => Int)
  psaId: number

  @Field(() => Int)
  participantId: number

  @Field(() => Int)
  sponsorPlanId: number

  @Field(() => Int)
  accountId: number

  @Field(() => String)
  status: string

  @Field(() => Date)
  activatedAt?: Date

  @Field(() => Date)
  createdAt: Date

  @Field(() => Boolean)
  isEligible: Date

  @Field(() => Date)
  eligibilityDate?: Date

  @Field(() => Boolean)
  optOut: Date

  @Field(() => Date)
  entryDate?: Date

  @Field(() => Boolean)
  paperlessNotices?: Date

  @Field(() => Boolean)
  blockRoth: Date

  @Field(() => Boolean)
  blockNonRoth: Date

  @Field(() => Int)
  yearsOfVesting?: number

  @Field(() => Boolean)
  partialPlanTermination: Date

  @Field(() => Int)
  historicalYearsOfService: number

  @Field()
  participant: string

  @Field()
  sponsorPlan: string
}
