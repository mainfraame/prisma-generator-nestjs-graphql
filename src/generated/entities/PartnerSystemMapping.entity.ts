import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class PartnerSystemMapping {
  @Field(() => Int, { nullable: false })
  partnerSystemMappingId: number;

  @Field(() => Int, { nullable: false })
  partnerSystemId: number;

  @Field(() => String, { nullable: true })
  externalId?: string;

  @Field(() => Int, { nullable: false })
  internalId: number;

  @Field(() => Int, { nullable: false })
  entityTypeId: number;

  @Field(() => GraphQLJSONObject, { nullable: false })
  partnerSpecificData: Record<string, unknown>;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;
}
