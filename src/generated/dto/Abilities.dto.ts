import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateAbilitiesDto {
  @Field(() => GraphQLJSONObject, { nullable: true })
  config?: Record<string, unknown>;

  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  name: string;
}

@InputType()
export class DeleteAbilitiesDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class FindManyAbilitiesDto {
  @Field(() => GraphQLJSONObject, { nullable: true })
  config?: Record<string, unknown>;

  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
export class FindUniqueAbilitiesDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class UpdateDataAbilitiesDto {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  config?: Record<string, unknown>;
}

@InputType()
export class UpdateWhereAbilitiesDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
