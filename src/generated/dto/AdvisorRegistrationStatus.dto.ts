import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateAdvisorRegistrationStatusDto {
  @Field(() => Int, { nullable: false })
  advisorId: number;

  @Field(() => Int, { nullable: false })
  advisorRegistrationStatusId: number;

  @Field(() => String, { nullable: false })
  advisorUuid: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  completedAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;
}

@InputType()
export class DeleteAdvisorRegistrationStatusDto {
  @Field(() => Int, { nullable: false })
  advisorRegistrationStatusId: number;
}

@InputType()
export class FindManyAdvisorRegistrationStatusDto {
  @Field(() => Int, { nullable: true })
  advisorId?: number;

  @Field(() => Int, { nullable: true })
  advisorRegistrationStatusId?: number;

  @Field(() => String, { nullable: true })
  advisorUuid?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  completedAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;
}

@InputType()
export class FindUniqueAdvisorRegistrationStatusDto {
  @Field(() => Int, { nullable: false })
  advisorRegistrationStatusId: number;
}

@InputType()
export class UpdateDataAdvisorRegistrationStatusDto {
  @Field(() => Int, { nullable: false })
  advisorId: number;

  @Field(() => String, { nullable: false })
  advisorUuid: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  completedAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;
}

@InputType()
export class UpdateWhereAdvisorRegistrationStatusDto {
  @Field(() => Int, { nullable: false })
  advisorRegistrationStatusId: number;
}
