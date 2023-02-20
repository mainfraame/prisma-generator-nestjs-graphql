import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UserRolesAdvisor {
  @Field(() => Int)
  id: number

  @Field(() => Int)
  userId: number

  @Field(() => Int)
  advisorId: number

  @Field(() => Int)
  accessRoleId: number

  @Field(() => Boolean)
  isTemp: Date

  @Field(() => Date)
  createdAt?: Date

  @Field(() => String)
  sessionId: string

  @Field()
  accessRole: string

  @Field()
  advisor: string

  @Field()
  user: string
}
