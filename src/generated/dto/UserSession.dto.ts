import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UserSession {
  @Field(() => Int)
  id: number

  @Field(() => Int)
  userId: number

  @Field(() => String)
  sessionId?: string

  @Field(() => Date)
  createdAt?: Date

  @Field()
  user?: string
}
