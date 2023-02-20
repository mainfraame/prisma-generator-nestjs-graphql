import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UserMfaAttempt {
  @Field(() => Int)
  id: number

  @Field(() => Int)
  userId: number

  @Field(() => Int)
  attempts: number

  @Field(() => Date)
  updatedAt?: Date

  @Field()
  user?: string
}
