import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class UserRolesParticipant {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => Int, { nullable: false })
  participantId: number;

  @Field(() => Int, { nullable: false })
  accessRoleId: number;

  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => Boolean, { nullable: true })
  isTemp?: boolean;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => String, { nullable: false })
  sessionId: string;
}
