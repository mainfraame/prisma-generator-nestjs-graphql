import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class ParticipantRegistrationStatus {
  @Field(() => Int)
  registrationStatusId: number

  @Field(() => Int)
  participantId: number

  @Field(() => String)
  registrationUuid: string

  @Field(() => Int)
  verificationAttemptsLeft: number

  @Field(() => Date)
  completedAt?: Date

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field()
  participant: string
}
