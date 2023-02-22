import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class StatefulSchemaTracking {
  @Field(() => Int, { nullable: false })
  statefulSchemaTrackingId: number;

  @Field(() => Int, { nullable: false })
  statefulSchemaId: number;

  @Field(() => Int, { nullable: false })
  sharedEntityTypeId: number;

  @Field(() => Int, { nullable: false })
  entityId: number;

  @Field(() => GraphQLJSONObject, { nullable: false })
  state: Record<string, unknown>;

  @Field(() => String, { nullable: false })
  status: undefined;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => Int, { nullable: false })
  updatedBy: number;
}
