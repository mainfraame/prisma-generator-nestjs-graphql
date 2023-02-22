import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class UserInvite {
  @Field(() => Int, { nullable: false })
  userInviteId: number;

  @Field(() => String, { nullable: false })
  inviteCode: string;

  @Field(() => String, { nullable: false })
  deliveryMethod: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: false })
  entityType: string;

  @Field(() => Int, { nullable: false })
  entityId: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int, { nullable: false })
  accessRoleIds: number;

  @Field(() => Int, { nullable: false })
  verificationAttempts: number;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  expiresAt: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  invalidatedAt?: Date;
}
