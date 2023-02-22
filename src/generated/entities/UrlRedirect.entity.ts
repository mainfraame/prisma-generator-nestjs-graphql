import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class UrlRedirect {
  @Field(() => Int, { nullable: false })
  urlRedirectId: number;

  @Field(() => String, { nullable: false })
  hash: string;

  @Field(() => String, { nullable: false })
  postLoginPath: string;

  @Field(() => String, { nullable: false })
  postPersonaPath: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;
}
