import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class UserSession {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => String, { nullable: true })
  sessionId?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;
}
