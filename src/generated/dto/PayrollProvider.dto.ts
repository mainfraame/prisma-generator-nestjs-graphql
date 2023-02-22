import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreatePayrollProviderDto {
  @Field(() => Int, { nullable: false })
  payrollProviderId: number;

  @Field(() => String, { nullable: false })
  payrollProviderName: string;
}

@InputType()
export class DeletePayrollProviderDto {
  @Field(() => Int, { nullable: false })
  payrollProviderId: number;
}

@InputType()
export class FindManyPayrollProviderDto {
  @Field(() => Int, { nullable: true })
  payrollProviderId?: number;

  @Field(() => String, { nullable: true })
  payrollProviderName?: string;
}

@InputType()
export class FindUniquePayrollProviderDto {
  @Field(() => Int, { nullable: false })
  payrollProviderId: number;
}

@InputType()
export class UpdateDataPayrollProviderDto {
  @Field(() => String, { nullable: false })
  payrollProviderName: string;
}

@InputType()
export class UpdateWherePayrollProviderDto {
  @Field(() => Int, { nullable: false })
  payrollProviderId: number;
}
