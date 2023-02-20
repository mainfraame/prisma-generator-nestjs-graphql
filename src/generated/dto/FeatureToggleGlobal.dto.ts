import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class FeatureToggleGlobal {
  @Field(() => Int)
  featureToggleGlobalId: number

  @Field(() => String)
  featureName?: string

  @Field(() => Boolean)
  isEnabled?: Date

  @Field(() => String)
  featureDescription?: string
}
