import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class StatefulSchemaTracking {
  @Field(() => Int)
  statefulSchemaTrackingId: number

  @Field(() => Int)
  statefulSchemaId: number

  @Field(() => Int)
  sharedEntityTypeId: number

  @Field(() => Int)
  entityId: number

  @Field()
  state: Record<string, unknown>

  @Field()
  status: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field(() => Int)
  updatedBy: number

  @Field()
  sharedEntityType: string

  @Field()
  user: string
}
