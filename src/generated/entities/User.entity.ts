import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class User {
  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => Boolean, { nullable: true })
  pendingPasswordReset?: boolean;

  @Field(() => Int, { nullable: true })
  invalidPasswordCount?: number;

  @Field(() => Boolean, { nullable: true })
  isLocked?: boolean;

  @Field(() => Boolean, { nullable: true })
  isMfaEnabled?: boolean;

  @Field(() => String, { nullable: true })
  mfaSecret?: string;
}
