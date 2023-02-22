import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class Recordkeeper {
  @Field(() => Int, { nullable: false })
  recordkeeperId: number;

  @Field(() => Int, { nullable: false })
  partnerSystemId: number;

  @Field(() => String, { nullable: true })
  platform?: undefined;

  @Field(() => Boolean, { nullable: false })
  isDefault: boolean;

  @Field(() => Boolean, { nullable: false })
  isAchSupported: boolean;

  @Field(() => String, { nullable: false })
  loanPaymentAllocationConfig: string;
}
