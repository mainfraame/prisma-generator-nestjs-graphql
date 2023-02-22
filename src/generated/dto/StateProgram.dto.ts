import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateStateProgramDto {
  @Field(() => String, { nullable: false })
  employeeCode: string;

  @Field(() => String, { nullable: false })
  employeeFundCode: string;

  @Field(() => String, { nullable: false })
  employerCode: string;

  @Field(() => String, { nullable: false })
  feeTableCode: string;

  @Field(() => Int, { nullable: false })
  firmId: number;

  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  overnightCheckMailAddress?: Record<string, unknown>;

  @Field(() => Int, { nullable: false })
  partnerSystemId: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  regularCheckMailAddress?: Record<string, unknown>;
}

@InputType()
export class DeleteStateProgramDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class FindManyStateProgramDto {
  @Field(() => String, { nullable: true })
  employeeCode?: string;

  @Field(() => String, { nullable: true })
  employeeFundCode?: string;

  @Field(() => String, { nullable: true })
  employerCode?: string;

  @Field(() => String, { nullable: true })
  feeTableCode?: string;

  @Field(() => Int, { nullable: true })
  firmId?: number;

  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  overnightCheckMailAddress?: Record<string, unknown>;

  @Field(() => Int, { nullable: true })
  partnerSystemId?: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  regularCheckMailAddress?: Record<string, unknown>;
}

@InputType()
export class FindUniqueStateProgramDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class UpdateDataStateProgramDto {
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

@InputType()
export class UpdateWhereStateProgramDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
