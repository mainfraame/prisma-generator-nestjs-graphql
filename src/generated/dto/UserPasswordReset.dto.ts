import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UserPasswordReset {
  @Field(() => Int)
  id: number

  @Field(() => Int)
  userId: number

  @Field(() => String)
  token?: string

  @Field(() => Date)
  createdAt?: Date

  @Field(() => Boolean)
  isUsed?: Date

  @Field(() => Boolean)
  isValid?: Date
}
