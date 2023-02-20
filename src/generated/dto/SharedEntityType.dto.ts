import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class SharedEntityType {
  @Field(() => Int)
  sharedEntityTypeId: number

  @Field(() => String)
  name: string

  @Field()
  address: string

  @Field()
  partnerSystemMapping: string

  @Field()
  statefulSchemaTracking: string
}
