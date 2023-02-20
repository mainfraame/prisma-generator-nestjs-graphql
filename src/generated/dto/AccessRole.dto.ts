import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AccessRole {
  @Field(() => Int)
  accessRoleId: number

  @Field(() => String)
  accessRoleType: string

  @Field(() => String)
  name: string

  @Field(() => Boolean)
  isDeprecated: Date

  @Field(() => Boolean)
  isRetired: Date

  @Field()
  accessRoleAbilities: string

  @Field()
  userRolesAdvisor: string

  @Field()
  userRolesEntity: string

  @Field()
  userRolesParticipant: string

  @Field()
  userRolesSponsor: string
}
