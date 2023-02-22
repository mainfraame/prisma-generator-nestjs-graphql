import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class ParticipantRegistrationStatus {
  @Field(() => Int, { nullable: false })
  registrationStatusId: number;

  @Field(() => Int, { nullable: false })
  participantId: number;

  @Field(() => String, { nullable: false })
  registrationUuid: string;

  @Field(() => Int, { nullable: false })
  verificationAttemptsLeft: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  completedAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;
}
