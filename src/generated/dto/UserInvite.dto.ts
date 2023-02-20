import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UserInvite {
  @Field(() => Int)
  userInviteId: number

  @Field(() => String)
  inviteCode: string

  @Field(() => String)
  deliveryMethod: string

  @Field(() => String)
  email?: string

  @Field(() => String)
  entityType: string

  @Field(() => Int)
  entityId: number

  @Field(() => Int)
  userId?: number

  @Field(() => Int)
  accessRoleIds: number

  @Field(() => Int)
  verificationAttempts: number

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  expiresAt: Date

  @Field(() => Date)
  invalidatedAt?: Date

  @Field()
  user?: string
}
