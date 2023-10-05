import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { IntFilterScalar } from '../scalar/IntFilterScalar';
import { StringFilterScalar } from '../scalar/StringFilterScalar';
import { UserGroupByScalar } from '../scalar/UserGroupByScalar';
import { UserOrderByScalar } from '../scalar/UserOrderByScalar';

@ArgsType()
export class CreateUserArg {
  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: true })
  name?: string | null;

  @Field(() => String, { nullable: false })
  password: string;
}

@ArgsType()
export class DeleteUserArg {
  @Field(() => Int, { nullable: false })
  id: number;
}

@ArgsType()
export class DeleteManyUserArg {
  @Field(() => StringFilterScalar, { nullable: true })
  email?: string | StringFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  name?: string | StringFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  password?: string | StringFilterScalar;
}

@ArgsType()
export class FindManyUserArg {
  @Field(() => StringFilterScalar, { nullable: true })
  email?: string | StringFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  name?: string | StringFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  password?: string | StringFilterScalar;

  @Field(() => UserGroupByScalar, { nullable: true })
  by?: Prisma.UserFindManyArgs['groupBy'];

  @Field(() => UserOrderByScalar, { nullable: true })
  orderBy?: Prisma.UserFindManyArgs['orderBy'];

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;
}

@ArgsType()
export class FindFirstUserArg {
  @Field(() => StringFilterScalar, { nullable: true })
  email?: string | StringFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  name?: string | StringFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  password?: string | StringFilterScalar;
}

@ArgsType()
export class FindUniqueUserArg {
  @Field(() => Int, { nullable: false })
  id: number;
}

@ArgsType()
export class UpdateDataUserArg {
  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: false })
  password: string;

  @Field(() => String, { nullable: true })
  name?: string | null;
}

@ArgsType()
export class UpdateWhereUserArg {
  @Field(() => Int, { nullable: false })
  id: number;
}
