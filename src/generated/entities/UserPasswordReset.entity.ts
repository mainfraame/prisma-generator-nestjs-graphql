import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class UserPasswordReset {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => String, { nullable: true })
  token?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Boolean, { nullable: true })
  isUsed?: boolean;

  @Field(() => Boolean, { nullable: true })
  isValid?: boolean;
}
