import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UserRolesParticipant {
  @Field(() => Int)
  id: number

  @Field(() => Int)
  participantId: number

  @Field(() => Int)
  accessRoleId: number

  @Field(() => Int)
  userId: number

  @Field(() => Boolean)
  isTemp?: Date

  @Field(() => Date)
  createdAt?: Date

  @Field(() => String)
  sessionId: string

  @Field()
  accessRole: string

  @Field()
  participant: string

  @Field()
  user: string
}
