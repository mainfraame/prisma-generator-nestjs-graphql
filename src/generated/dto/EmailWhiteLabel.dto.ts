import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateEmailWhiteLabelDto {
  @Field(() => Int, { nullable: false })
  definitionId: number;

  @Field(() => GraphQLJSONObject, { nullable: false })
  emailContent: Record<string, unknown>;

  @Field(() => String, { nullable: true })
  entity?: undefined;

  @Field(() => Int, { nullable: true })
  entityId?: number;

  @Field(() => Int, { nullable: false })
  whitelabelContentId: number;
}

@InputType()
export class DeleteEmailWhiteLabelDto {
  @Field(() => Int, { nullable: false })
  whitelabelContentId: number;
}

@InputType()
export class FindManyEmailWhiteLabelDto {
  @Field(() => Int, { nullable: true })
  definitionId?: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  emailContent?: Record<string, unknown>;

  @Field(() => String, { nullable: true })
  entity?: undefined;

  @Field(() => Int, { nullable: true })
  entityId?: number;

  @Field(() => Int, { nullable: true })
  whitelabelContentId?: number;
}

@InputType()
export class FindUniqueEmailWhiteLabelDto {
  @Field(() => Int, { nullable: false })
  whitelabelContentId: number;
}

@InputType()
export class UpdateDataEmailWhiteLabelDto {
  @Field(() => Int, { nullable: false })
  definitionId: number;

  @Field(() => GraphQLJSONObject, { nullable: false })
  emailContent: Record<string, unknown>;

  @Field(() => String, { nullable: true })
  entity?: undefined;

  @Field(() => Int, { nullable: true })
  entityId?: number;
}

@InputType()
export class UpdateWhereEmailWhiteLabelDto {
  @Field(() => Int, { nullable: false })
  whitelabelContentId: number;
}
