import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { IntFilterInput } from '../arg/IntFilterInput.arg';
import { IntOrFilter } from '../scalar/IntOrFilter.scalar';
import { UserOrderBy } from '../scalar/UserOrderBy.scalar';

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
export class FindManyUserArg {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => IntOrFilter, { nullable: true })
  id?: number | IntFilterInput;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => UserOrderBy, { nullable: true })
  orderBy?: Prisma.UserFindManyArgs['orderBy'];

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;
}

@ArgsType()
export class FindFirstUserArg {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => IntOrFilter, { nullable: true })
  id?: number | IntFilterInput;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  password?: string;
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
