import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class PartnerSystem {
  @Field(() => Int, { nullable: false })
  partnerSystemId: number;

  @Field(() => String, { nullable: false })
  name: string;
}
