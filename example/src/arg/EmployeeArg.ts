import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { EmployeeOrderByScalar } from '../scalar/EmployeeOrderByScalar';
import { IntFilterScalar } from '../scalar/IntFilterScalar';
import { StringFilterScalar } from '../scalar/StringFilterScalar';

@ArgsType()
export class CreateEmployeeArg {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  position: string;
}

@ArgsType()
export class DeleteEmployeeArg {
  @Field(() => Int, { nullable: false })
  id: number;
}

@ArgsType()
export class DeleteManyEmployeeArg {
  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  name?: string | StringFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  position?: string | StringFilterScalar;
}

@ArgsType()
export class FindManyEmployeeArg {
  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  name?: string | StringFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  position?: string | StringFilterScalar;

  @Field(() => EmployeeOrderByScalar, { nullable: true })
  orderBy?: Prisma.EmployeeFindManyArgs['orderBy'];

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;
}

@ArgsType()
export class FindFirstEmployeeArg {
  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  name?: string | StringFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  position?: string | StringFilterScalar;
}

@ArgsType()
export class FindUniqueEmployeeArg {
  @Field(() => Int, { nullable: false })
  id: number;
}

@ArgsType()
export class UpdateDataEmployeeArg {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  position: string;
}

@ArgsType()
export class UpdateWhereEmployeeArg {
  @Field(() => Int, { nullable: false })
  id: number;
}
