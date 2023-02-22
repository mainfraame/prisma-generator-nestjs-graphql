import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class Model {
  @Field(() => Int, { nullable: false })
  modelId: number;

  @Field(() => String, { nullable: false })
  modelName: string;

  @Field(() => Int, { nullable: false })
  riskLevel: number;

  @Field(() => Boolean, { nullable: false })
  autoRebalance: boolean;

  @Field(() => Int, { nullable: false })
  rebalanceFreq: number;

  @Field(() => Float, { nullable: false })
  fees: number;

  @Field(() => Int, { nullable: false })
  drift: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: false })
  createdById: number;

  @Field(() => String, { nullable: false })
  status: string;

  @Field(() => String, { nullable: true })
  updatedBy?: string;

  @Field(() => Int, { nullable: false })
  benchmarkId: number;

  @Field(() => String, { nullable: false })
  viewName: string;

  @Field(() => Int, { nullable: false })
  programId: number;

  @Field(() => String, { nullable: true })
  programType?: string;

  @Field(() => Boolean, { nullable: true })
  defaultInvest?: boolean;

  @Field(() => Int, { nullable: true })
  yearsToRetireLow?: number;

  @Field(() => Int, { nullable: true })
  yearsToRetireHigh?: number;

  @Field(() => Int, { nullable: true })
  riskValue1Low?: number;

  @Field(() => Int, { nullable: true })
  riskValue1High?: number;

  @Field(() => String, { nullable: true })
  programName?: string;

  @Field(() => String, { nullable: true })
  factsheet?: string;

  @Field(() => String, { nullable: false })
  modelType: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Int, { nullable: false })
  securityProviderId: number;

  @Field(() => String, { nullable: true })
  benchmarkName?: string;

  @Field(() => String, { nullable: true })
  benchmarkDescription?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  inceptionDate?: Date;
}
