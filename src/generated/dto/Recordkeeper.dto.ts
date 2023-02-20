import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Recordkeeper {
  @Field(() => Int)
  recordkeeperId: number

  @Field(() => Int)
  partnerSystemId: number

  @Field()
  platform?: string

  @Field(() => Boolean)
  isDefault: Date

  @Field(() => Boolean)
  isAchSupported: Date

  @Field(() => String)
  loanPaymentAllocationConfig: string

  @Field()
  partnerSystem: string

  @Field()
  sponsorPlan: string
}
