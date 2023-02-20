import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class PartnerSystemMapping {
  @Field(() => Int)
  partnerSystemMappingId: number

  @Field(() => Int)
  partnerSystemId: number

  @Field(() => String)
  externalId?: string

  @Field(() => Int)
  internalId: number

  @Field(() => Int)
  entityTypeId: number

  @Field()
  partnerSpecificData: Record<string, unknown>

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field()
  sharedEntityType: string

  @Field()
  partnerSystem: string

  @Field()
  user: string
}
