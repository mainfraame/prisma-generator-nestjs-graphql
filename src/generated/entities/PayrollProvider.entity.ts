import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class PayrollProvider {
  @Field(() => Int, { nullable: false })
  payrollProviderId: number;

  @Field(() => String, { nullable: false })
  payrollProviderName: string;
}
