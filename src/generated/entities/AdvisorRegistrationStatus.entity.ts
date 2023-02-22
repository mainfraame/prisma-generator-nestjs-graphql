import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class AdvisorRegistrationStatus {
  @Field(() => Int, { nullable: false })
  advisorRegistrationStatusId: number;

  @Field(() => Int, { nullable: false })
  advisorId: number;

  @Field(() => String, { nullable: false })
  advisorUuid: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  completedAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;
}
