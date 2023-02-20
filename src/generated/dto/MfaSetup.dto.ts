import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MfaSetup {
  @Field(() => Int)
  id: number

  @Field(() => Int)
  userId: number

  @Field(() => String)
  entryType: string

  @Field(() => String)
  value?: string

  @Field(() => String)
  secret: string

  @Field(() => Date)
  createdAt?: Date
}
