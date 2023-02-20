import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UserRolesSponsor {
  @Field(() => Int)
  id: number

  @Field(() => Int)
  sponsorId: number

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
  sponsor: string

  @Field()
  user: string
}
