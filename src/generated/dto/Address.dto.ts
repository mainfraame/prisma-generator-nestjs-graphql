import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Address {
  @Field(() => Int)
  addressId: number

  @Field()
  addressType?: string

  @Field(() => Int)
  entityId: number

  @Field(() => Int)
  entityTypeId: number

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
  country?: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field()
  updatedBy?: Record<string, unknown>

  @Field()
  sharedEntityType: string
}
