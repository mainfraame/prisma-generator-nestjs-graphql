import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(() => Int)
  userId: number

  @Field(() => String)
  email?: string

  @Field(() => String)
  password?: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => Date)
  updatedAt: Date

  @Field(() => Boolean)
  pendingPasswordReset?: Date

  @Field(() => Int)
  invalidPasswordCount?: number

  @Field(() => Boolean)
  isLocked?: Date

  @Field(() => Boolean)
  isMfaEnabled?: Date

  @Field(() => String)
  mfaSecret?: string

  @Field()
  partnerSystemMapping: string

  @Field()
  authToken: string

  @Field()
  statefulSchemaTracking: string

  @Field()
  userInvite: string

  @Field()
  userMfaAttempt: string

  @Field()
  userRolesAdvisor: string

  @Field()
  userRolesEntity: string

  @Field()
  userRolesParticipant: string

  @Field()
  userRolesSponsor: string

  @Field()
  userSession?: string
}
