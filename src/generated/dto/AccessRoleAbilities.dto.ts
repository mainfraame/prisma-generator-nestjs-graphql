import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class AccessRoleAbilities {
  @Field(() => Int)
  id: number

  @Field(() => Int)
  accessRoleId: number

  @Field(() => Int)
  abilityId: number

  @Field()
  abilities: string

  @Field()
  accessRole: string
}
