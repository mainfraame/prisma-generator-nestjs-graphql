import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class EmailDefinition {
  @Field(() => Int)
  definitionId: number

  @Field(() => String)
  name: string

  @Field(() => String)
  templateName: string

  @Field()
  config: Record<string, unknown>

  @Field(() => String)
  version: string

  @Field(() => Boolean)
  enabled: Date

  @Field()
  whiteLabel: string
}
