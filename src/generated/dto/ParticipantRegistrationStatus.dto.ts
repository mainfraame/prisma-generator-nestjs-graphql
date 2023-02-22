import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateParticipantRegistrationStatusDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  completedAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => Int, { nullable: false })
  participantId: number;

  @Field(() => Int, { nullable: false })
  registrationStatusId: number;

  @Field(() => String, { nullable: false })
  registrationUuid: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => Int, { nullable: false })
  verificationAttemptsLeft: number;
}

@InputType()
export class DeleteParticipantRegistrationStatusDto {
  @Field(() => Int, { nullable: false })
  registrationStatusId: number;
}

@InputType()
export class FindManyParticipantRegistrationStatusDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  completedAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  participantId?: number;

  @Field(() => Int, { nullable: true })
  registrationStatusId?: number;

  @Field(() => String, { nullable: true })
  registrationUuid?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;

  @Field(() => Int, { nullable: true })
  verificationAttemptsLeft?: number;
}

@InputType()
export class FindUniqueParticipantRegistrationStatusDto {
  @Field(() => Int, { nullable: false })
  registrationStatusId: number;
}

@InputType()
export class UpdateDataParticipantRegistrationStatusDto {
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

@InputType()
export class UpdateWhereParticipantRegistrationStatusDto {
  @Field(() => Int, { nullable: false })
  registrationStatusId: number;
}
