import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class AuthToken {
  @Field(() => Int, { nullable: false })
  authTokenId: number;

  @Field(() => String, { nullable: false })
  accessToken: string;

  @Field(() => String, { nullable: true })
  refreshToken?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  expiresAt: Date;

  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => Int, { nullable: false })
  partnerSystemId: number;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;
}
