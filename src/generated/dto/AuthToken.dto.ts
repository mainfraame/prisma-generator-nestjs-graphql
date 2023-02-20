import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AuthToken {
  @Field(() => Int)
  authTokenId: number

  @Field(() => String)
  accessToken: string

  @Field(() => String)
  refreshToken?: string

  @Field(() => Date)
  expiresAt: Date

  @Field(() => Int)
  userId: number

  @Field(() => Int)
  partnerSystemId: number

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field()
  partnerSystem: string

  @Field()
  user: string
}
