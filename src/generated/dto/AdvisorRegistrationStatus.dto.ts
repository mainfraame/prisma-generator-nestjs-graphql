import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AdvisorRegistrationStatus {
  @Field(() => Int)
  advisorRegistrationStatusId: number

  @Field(() => Int)
  advisorId: number

  @Field(() => String)
  advisorUuid: string

  @Field(() => Date)
  completedAt?: Date

  @Field(() => Date)
  createdAt: Date

  @Field()
  advisor: string
}
