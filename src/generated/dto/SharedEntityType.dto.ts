import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateSharedEntityTypeDto {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => Int, { nullable: false })
  sharedEntityTypeId: number;
}

@InputType()
export class DeleteSharedEntityTypeDto {
  @Field(() => Int, { nullable: false })
  sharedEntityTypeId: number;
}

@InputType()
export class FindManySharedEntityTypeDto {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  sharedEntityTypeId?: number;
}

@InputType()
export class FindUniqueSharedEntityTypeDto {
  @Field(() => Int, { nullable: false })
  sharedEntityTypeId: number;
}

@InputType()
export class UpdateDataSharedEntityTypeDto {
  @Field(() => String, { nullable: false })
  name: string;
}

@InputType()
export class UpdateWhereSharedEntityTypeDto {
  @Field(() => Int, { nullable: false })
  sharedEntityTypeId: number;
}
