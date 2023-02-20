import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class PartnerSystem {
  @Field(() => Int)
  partnerSystemId: number

  @Field(() => String)
  name: string

  @Field()
  authToken: string

  @Field()
  partnerSystemMapping: string

  @Field()
  recordkeeper: string

  @Field()
  stateProgram: string
}
