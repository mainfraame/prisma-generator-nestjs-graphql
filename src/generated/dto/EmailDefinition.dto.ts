import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateEmailDefinitionDto {
  @Field(() => GraphQLJSONObject, { nullable: false })
  config: Record<string, unknown>;

  @Field(() => Int, { nullable: false })
  definitionId: number;

  @Field(() => Boolean, { nullable: false })
  enabled: boolean;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  templateName: string;

  @Field(() => String, { nullable: false })
  version: string;
}

@InputType()
export class DeleteEmailDefinitionDto {
  @Field(() => Int, { nullable: false })
  definitionId: number;
}

@InputType()
export class FindManyEmailDefinitionDto {
  @Field(() => GraphQLJSONObject, { nullable: true })
  config?: Record<string, unknown>;

  @Field(() => Int, { nullable: true })
  definitionId?: number;

  @Field(() => Boolean, { nullable: true })
  enabled?: boolean;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  templateName?: string;

  @Field(() => String, { nullable: true })
  version?: string;
}

@InputType()
export class FindUniqueEmailDefinitionDto {
  @Field(() => Int, { nullable: false })
  definitionId: number;
}

@InputType()
export class UpdateDataEmailDefinitionDto {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  templateName: string;

  @Field(() => GraphQLJSONObject, { nullable: false })
  config: Record<string, unknown>;

  @Field(() => String, { nullable: false })
  version: string;

  @Field(() => Boolean, { nullable: false })
  enabled: boolean;
}

@InputType()
export class UpdateWhereEmailDefinitionDto {
  @Field(() => Int, { nullable: false })
  definitionId: number;
}
