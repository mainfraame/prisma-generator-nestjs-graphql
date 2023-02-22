import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateMfaSetupDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => String, { nullable: false })
  entryType: string;

  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  secret: string;

  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => String, { nullable: true })
  value?: string;
}

@InputType()
export class DeleteMfaSetupDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class FindManyMfaSetupDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => String, { nullable: true })
  entryType?: string;

  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  secret?: string;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => String, { nullable: true })
  value?: string;
}

@InputType()
export class FindUniqueMfaSetupDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class UpdateDataMfaSetupDto {
  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => String, { nullable: false })
  entryType: string;

  @Field(() => String, { nullable: true })
  value?: string;

  @Field(() => String, { nullable: false })
  secret: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;
}

@InputType()
export class UpdateWhereMfaSetupDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
