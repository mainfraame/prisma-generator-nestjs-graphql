import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class MfaEntry {
  @Field(() => Int, { nullable: false })
  mfaEntryId: number;

  @Field(() => Int, { nullable: false })
  mfaDefinitionId: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => String, { nullable: true })
  entryType?: string;

  @Field(() => String, { nullable: true })
  value?: string;

  @Field(() => Boolean, { nullable: true })
  isPrimary?: boolean;

  @Field(() => GraphQLJSONObject, { nullable: true })
  createdBy?: Record<string, unknown>;

  @Field(() => GraphQLJSONObject, { nullable: true })
  updatedBy?: Record<string, unknown>;
}
