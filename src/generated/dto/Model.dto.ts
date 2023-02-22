import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateModelDto {
  @Field(() => Boolean, { nullable: false })
  autoRebalance: boolean;

  @Field(() => String, { nullable: true })
  benchmarkDescription?: string;

  @Field(() => Int, { nullable: false })
  benchmarkId: number;

  @Field(() => String, { nullable: true })
  benchmarkName?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: false })
  createdById: number;

  @Field(() => Boolean, { nullable: true })
  defaultInvest?: boolean;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Int, { nullable: false })
  drift: number;

  @Field(() => String, { nullable: true })
  factsheet?: string;

  @Field(() => Float, { nullable: false })
  fees: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  inceptionDate?: Date;

  @Field(() => Int, { nullable: false })
  modelId: number;

  @Field(() => String, { nullable: false })
  modelName: string;

  @Field(() => String, { nullable: false })
  modelType: string;

  @Field(() => Int, { nullable: false })
  programId: number;

  @Field(() => String, { nullable: true })
  programName?: string;

  @Field(() => String, { nullable: true })
  programType?: string;

  @Field(() => Int, { nullable: false })
  rebalanceFreq: number;

  @Field(() => Int, { nullable: false })
  riskLevel: number;

  @Field(() => Int, { nullable: true })
  riskValue1High?: number;

  @Field(() => Int, { nullable: true })
  riskValue1Low?: number;

  @Field(() => Int, { nullable: false })
  securityProviderId: number;

  @Field(() => String, { nullable: false })
  status: string;

  @Field(() => String, { nullable: true })
  updatedBy?: string;

  @Field(() => String, { nullable: false })
  viewName: string;

  @Field(() => Int, { nullable: true })
  yearsToRetireHigh?: number;

  @Field(() => Int, { nullable: true })
  yearsToRetireLow?: number;
}

@InputType()
export class DeleteModelDto {
  @Field(() => Int, { nullable: false })
  modelId: number;
}

@InputType()
export class FindManyModelDto {
  @Field(() => Boolean, { nullable: true })
  autoRebalance?: boolean;

  @Field(() => String, { nullable: true })
  benchmarkDescription?: string;

  @Field(() => Int, { nullable: true })
  benchmarkId?: number;

  @Field(() => String, { nullable: true })
  benchmarkName?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => Int, { nullable: true })
  createdById?: number;

  @Field(() => Boolean, { nullable: true })
  defaultInvest?: boolean;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Int, { nullable: true })
  drift?: number;

  @Field(() => String, { nullable: true })
  factsheet?: string;

  @Field(() => Float, { nullable: true })
  fees?: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  inceptionDate?: Date;

  @Field(() => Int, { nullable: true })
  modelId?: number;

  @Field(() => String, { nullable: true })
  modelName?: string;

  @Field(() => String, { nullable: true })
  modelType?: string;

  @Field(() => Int, { nullable: true })
  programId?: number;

  @Field(() => String, { nullable: true })
  programName?: string;

  @Field(() => String, { nullable: true })
  programType?: string;

  @Field(() => Int, { nullable: true })
  rebalanceFreq?: number;

  @Field(() => Int, { nullable: true })
  riskLevel?: number;

  @Field(() => Int, { nullable: true })
  riskValue1High?: number;

  @Field(() => Int, { nullable: true })
  riskValue1Low?: number;

  @Field(() => Int, { nullable: true })
  securityProviderId?: number;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => String, { nullable: true })
  updatedBy?: string;

  @Field(() => String, { nullable: true })
  viewName?: string;

  @Field(() => Int, { nullable: true })
  yearsToRetireHigh?: number;

  @Field(() => Int, { nullable: true })
  yearsToRetireLow?: number;
}

@InputType()
export class FindUniqueModelDto {
  @Field(() => Int, { nullable: false })
  modelId: number;
}

@InputType()
export class UpdateDataModelDto {
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

@InputType()
export class UpdateWhereModelDto {
  @Field(() => Int, { nullable: false })
  modelId: number;
}
