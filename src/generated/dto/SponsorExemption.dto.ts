import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class SponsorExemption {
  @Field(() => Int)
  sponsorExemptionId: number

  @Field(() => String)
  exemptionConfirmationCode: string

  @Field(() => Int)
  sponsorId?: number

  @Field(() => String)
  reason: string

  @Field(() => String)
  signatureName: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  canceledAt?: Date

  @Field()
  sponsor?: string
}
