import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateRecordkeeperDto {
  @Field(() => Boolean, { nullable: false })
  isAchSupported: boolean;

  @Field(() => Boolean, { nullable: false })
  isDefault: boolean;

  @Field(() => String, { nullable: false })
  loanPaymentAllocationConfig: string;

  @Field(() => Int, { nullable: false })
  partnerSystemId: number;

  @Field(() => String, { nullable: true })
  platform?: undefined;

  @Field(() => Int, { nullable: false })
  recordkeeperId: number;
}

@InputType()
export class DeleteRecordkeeperDto {
  @Field(() => Int, { nullable: false })
  recordkeeperId: number;
}

@InputType()
export class FindManyRecordkeeperDto {
  @Field(() => Boolean, { nullable: true })
  isAchSupported?: boolean;

  @Field(() => Boolean, { nullable: true })
  isDefault?: boolean;

  @Field(() => String, { nullable: true })
  loanPaymentAllocationConfig?: string;

  @Field(() => Int, { nullable: true })
  partnerSystemId?: number;

  @Field(() => String, { nullable: true })
  platform?: undefined;

  @Field(() => Int, { nullable: true })
  recordkeeperId?: number;
}

@InputType()
export class FindUniqueRecordkeeperDto {
  @Field(() => Int, { nullable: false })
  recordkeeperId: number;
}

@InputType()
export class UpdateDataRecordkeeperDto {
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

@InputType()
export class UpdateWhereRecordkeeperDto {
  @Field(() => Int, { nullable: false })
  recordkeeperId: number;
}
