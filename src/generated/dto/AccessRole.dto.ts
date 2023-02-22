import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateAccessRoleDto {
  @Field(() => Int, { nullable: false })
  accessRoleId: number;

  @Field(() => String, { nullable: false })
  accessRoleType: string;

  @Field(() => Boolean, { nullable: false })
  isDeprecated: boolean;

  @Field(() => Boolean, { nullable: false })
  isRetired: boolean;

  @Field(() => String, { nullable: false })
  name: string;
}

@InputType()
export class DeleteAccessRoleDto {
  @Field(() => Int, { nullable: false })
  accessRoleId: number;
}

@InputType()
export class FindManyAccessRoleDto {
  @Field(() => Int, { nullable: true })
  accessRoleId?: number;

  @Field(() => String, { nullable: true })
  accessRoleType?: string;

  @Field(() => Boolean, { nullable: true })
  isDeprecated?: boolean;

  @Field(() => Boolean, { nullable: true })
  isRetired?: boolean;

  @Field(() => String, { nullable: true })
  name?: string;
}

@InputType()
export class FindUniqueAccessRoleDto {
  @Field(() => Int, { nullable: false })
  accessRoleId: number;
}

@InputType()
export class UpdateDataAccessRoleDto {
  @Field(() => String, { nullable: false })
  accessRoleType: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => Boolean, { nullable: false })
  isDeprecated: boolean;

  @Field(() => Boolean, { nullable: false })
  isRetired: boolean;
}

@InputType()
export class UpdateWhereAccessRoleDto {
  @Field(() => Int, { nullable: false })
  accessRoleId: number;
}
