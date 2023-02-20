import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AdvisorSponsorPlan {
  @Field(() => Int)
  advisorId: number

  @Field(() => Int)
  sponsorPlanId: number

  @Field(() => Int)
  programId?: number

  @Field()
  advisor: string

  @Field()
  program?: string

  @Field()
  sponsorPlan: string
}
