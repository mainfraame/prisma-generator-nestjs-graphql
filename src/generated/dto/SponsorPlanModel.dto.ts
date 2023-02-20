import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class SponsorPlanModel {
  @Field(() => Int)
  sponsorPlanModelId: number

  @Field(() => Int)
  modelId: number

  @Field(() => Int)
  sponsorPlanId: number

  @Field()
  model: string

  @Field()
  sponsorPlan: string
}
