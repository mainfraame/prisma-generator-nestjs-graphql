import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class UrlRedirect {
  @Field(() => Int)
  urlRedirectId: number

  @Field(() => String)
  hash: string

  @Field(() => String)
  postLoginPath: string

  @Field(() => String)
  postPersonaPath: string

  @Field(() => Date)
  createdAt: Date
}
