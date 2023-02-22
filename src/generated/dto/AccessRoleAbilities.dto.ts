import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateAccessRoleAbilitiesDto {
  @Field(() => Int, { nullable: false })
  abilityId: number;

  @Field(() => Int, { nullable: false })
  accessRoleId: number;

  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class DeleteAccessRoleAbilitiesDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class FindManyAccessRoleAbilitiesDto {
  @Field(() => Int, { nullable: true })
  abilityId?: number;

  @Field(() => Int, { nullable: true })
  accessRoleId?: number;

  @Field(() => Int, { nullable: true })
  id?: number;
}

@InputType()
export class FindUniqueAccessRoleAbilitiesDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class UpdateDataAccessRoleAbilitiesDto {
  @Field(() => Int, { nullable: false })
  accessRoleId: number;

  @Field(() => Int, { nullable: false })
  abilityId: number;
}

@InputType()
export class UpdateWhereAccessRoleAbilitiesDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
