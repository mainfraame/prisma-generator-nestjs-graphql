import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class UserMfaAttempt {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => Int, { nullable: false })
  attempts: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;
}
