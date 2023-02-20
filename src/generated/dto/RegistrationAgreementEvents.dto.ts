import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class RegistrationAgreementEvents {
  @Field(() => Int)
  eventId: number

  @Field(() => Int)
  userId: number

  @Field(() => Int)
  personaId: number

  @Field(() => Int)
  eventTypeId: number

  @Field(() => Int)
  definitionId: number

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  eventTimestamp?: Date
}
