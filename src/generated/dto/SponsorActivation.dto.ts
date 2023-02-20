import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class SponsorActivation {
  @Field(() => Int)
  sponsorActivationId: number

  @Field(() => Int)
  sponsorId?: number

  @Field(() => Boolean)
  completedCompanyInformation?: Date

  @Field(() => Boolean)
  completedDesignYourPlan?: Date

  @Field(() => Boolean)
  completedConnectPayroll?: Date

  @Field(() => Boolean)
  completedContractSigning?: Date

  @Field(() => Boolean)
  completedAddEmployees?: Date

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field()
  sponsor?: string
}
