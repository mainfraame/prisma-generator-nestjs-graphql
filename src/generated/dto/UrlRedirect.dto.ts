import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateUrlRedirectDto {
  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => String, { nullable: false })
  hash: string;

  @Field(() => String, { nullable: false })
  postLoginPath: string;

  @Field(() => String, { nullable: false })
  postPersonaPath: string;

  @Field(() => Int, { nullable: false })
  urlRedirectId: number;
}

@InputType()
export class DeleteUrlRedirectDto {
  @Field(() => Int, { nullable: false })
  urlRedirectId: number;
}

@InputType()
export class FindManyUrlRedirectDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => String, { nullable: true })
  hash?: string;

  @Field(() => String, { nullable: true })
  postLoginPath?: string;

  @Field(() => String, { nullable: true })
  postPersonaPath?: string;

  @Field(() => Int, { nullable: true })
  urlRedirectId?: number;
}

@InputType()
export class FindUniqueUrlRedirectDto {
  @Field(() => Int, { nullable: false })
  urlRedirectId: number;
}

@InputType()
export class UpdateDataUrlRedirectDto {
  @Field(() => String, { nullable: false })
  hash: string;

  @Field(() => String, { nullable: false })
  postLoginPath: string;

  @Field(() => String, { nullable: false })
  postPersonaPath: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;
}

@InputType()
export class UpdateWhereUrlRedirectDto {
  @Field(() => Int, { nullable: false })
  urlRedirectId: number;
}
