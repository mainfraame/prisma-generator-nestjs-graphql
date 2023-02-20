import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AdvisorActivation {
  @Field(() => Int)
  advisorActivationId: number

  @Field(() => Int)
  advisorId?: number

  @Field(() => Boolean)
  completedPracticeInformation?: Date

  @Field(() => Boolean)
  completedChooseFeatures?: Date

  @Field(() => Boolean)
  completedLearnVestwell?: Date

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field()
  advisor?: string
}
