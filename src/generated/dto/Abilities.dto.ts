import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Abilities {
  @Field(() => Int)
  id: number

  @Field(() => String)
  name: string

  @Field()
  config?: Record<string, unknown>

  @Field()
  accessRoleAbilities: string
}
