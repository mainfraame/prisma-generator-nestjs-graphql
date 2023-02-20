import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MfaEntry {
  @Field(() => Int)
  mfaEntryId: number

  @Field(() => Int)
  mfaDefinitionId: number

  @Field(() => Int)
  userId?: number

  @Field(() => String)
  entryType?: string

  @Field(() => String)
  value?: string

  @Field(() => Boolean)
  isPrimary?: Date

  @Field()
  createdBy?: Record<string, unknown>

  @Field()
  updatedBy?: Record<string, unknown>
}
