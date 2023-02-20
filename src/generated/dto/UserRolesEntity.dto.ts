import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UserRolesEntity {
  @Field(() => Int)
  id: number

  @Field(() => Int)
  userId: number

  @Field(() => Int)
  accessRoleId: number

  @Field(() => String)
  entityType: string

  @Field(() => Int)
  entityId: number

  @Field(() => Date)
  createdAt?: Date

  @Field()
  accessRole: string

  @Field()
  user: string
}
