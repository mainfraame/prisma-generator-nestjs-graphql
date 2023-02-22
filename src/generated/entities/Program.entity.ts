import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class Program {
  @Field(() => Int, { nullable: false })
  programId: number;

  @Field(() => String, { nullable: false })
  type: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => Int, { nullable: false })
  programStatusId: number;

  @Field(() => Int, { nullable: false })
  programStrategyStatusId: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  programSpecificData?: Record<string, unknown>;

  @Field(() => GraphQLJSONObject, { nullable: true })
  updatedBy?: Record<string, unknown>;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;
}
