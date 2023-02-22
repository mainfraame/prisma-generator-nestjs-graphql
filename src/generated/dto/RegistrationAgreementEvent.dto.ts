import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateRegistrationAgreementEventDto {
  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => Int, { nullable: false })
  definitionId: number;

  @Field(() => Int, { nullable: false })
  eventId: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  eventTimestamp?: Date;

  @Field(() => Int, { nullable: false })
  eventTypeId: number;

  @Field(() => Int, { nullable: false })
  personaId: number;

  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class DeleteRegistrationAgreementEventDto {
  @Field(() => Int, { nullable: false })
  eventId: number;
}

@InputType()
export class FindManyRegistrationAgreementEventDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  definitionId?: number;

  @Field(() => Int, { nullable: true })
  eventId?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  eventTimestamp?: Date;

  @Field(() => Int, { nullable: true })
  eventTypeId?: number;

  @Field(() => Int, { nullable: true })
  personaId?: number;

  @Field(() => Int, { nullable: true })
  userId?: number;
}

@InputType()
export class FindUniqueRegistrationAgreementEventDto {
  @Field(() => Int, { nullable: false })
  eventId: number;
}

@InputType()
export class UpdateDataRegistrationAgreementEventDto {
  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => Int, { nullable: false })
  personaId: number;

  @Field(() => Int, { nullable: false })
  eventTypeId: number;

  @Field(() => Int, { nullable: false })
  definitionId: number;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  eventTimestamp?: Date;
}

@InputType()
export class UpdateWhereRegistrationAgreementEventDto {
  @Field(() => Int, { nullable: false })
  eventId: number;
}
