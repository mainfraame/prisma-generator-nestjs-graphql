import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class StateProgram {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => Int, { nullable: false })
  partnerSystemId: number;

  @Field(() => Int, { nullable: false })
  firmId: number;

  @Field(() => String, { nullable: false })
  employerCode: string;

  @Field(() => String, { nullable: false })
  employeeCode: string;

  @Field(() => String, { nullable: false })
  employeeFundCode: string;

  @Field(() => String, { nullable: false })
  feeTableCode: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  regularCheckMailAddress?: Record<string, unknown>;

  @Field(() => GraphQLJSONObject, { nullable: true })
  overnightCheckMailAddress?: Record<string, unknown>;
}
