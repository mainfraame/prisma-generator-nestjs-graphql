import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class EmailWhiteLabel {
  @Field(() => Int)
  whitelabelContentId: number

  @Field(() => Int)
  definitionId: number

  @Field()
  emailContent: Record<string, unknown>

  @Field()
  entity?: string

  @Field(() => Int)
  entityId?: number

  @Field()
  definition: string
}
