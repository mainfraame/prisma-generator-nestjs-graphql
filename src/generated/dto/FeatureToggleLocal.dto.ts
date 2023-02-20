import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class FeatureToggleLocal {
  @Field(() => Int)
  featureToggleLocalId: number

  @Field(() => Int)
  featureToggleGlobalId?: number

  @Field(() => Boolean)
  isEnabled?: Date

  @Field(() => Boolean)
  isGlobalOverrideEnabled?: Date

  @Field(() => Int)
  firmId?: number

  @Field(() => Int)
  advisorId?: number

  @Field(() => Int)
  sponsorId?: number

  @Field(() => Int)
  sponsorPlanId?: number

  @Field(() => Int)
  participantId?: number
}
