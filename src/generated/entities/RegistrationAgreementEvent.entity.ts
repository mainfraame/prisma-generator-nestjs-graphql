import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class RegistrationAgreementEvent {
  @Field(() => Int, { nullable: false })
  eventId: number;

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
