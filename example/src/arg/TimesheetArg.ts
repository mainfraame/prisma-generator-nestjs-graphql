import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { DateFilterScalar } from '../scalar/DateFilterScalar';
import { IntFilterScalar } from '../scalar/IntFilterScalar';
import { TimesheetOrderByScalar } from '../scalar/TimesheetOrderByScalar';

@ArgsType()
export class CreateTimesheetArg {
  @Field(() => Date, { nullable: false })
  date: Date;

  @Field(() => Int, { nullable: false })
  employeeId: number;

  @Field(() => Int, { nullable: false })
  hours: number;
}

@ArgsType()
export class DeleteTimesheetArg {
  @Field(() => Date, { nullable: false })
  date: Date;

  @Field(() => Int, { nullable: false })
  employeeId: number;
}

@ArgsType()
export class DeleteManyTimesheetArg {
  @Field(() => DateFilterScalar, { nullable: true })
  date?: Date | DateFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  employeeId?: number | IntFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  hours?: number | IntFilterScalar;
}

@ArgsType()
export class FindManyTimesheetArg {
  @Field(() => DateFilterScalar, { nullable: true })
  date?: Date | DateFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  employeeId?: number | IntFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  hours?: number | IntFilterScalar;

  @Field(() => TimesheetOrderByScalar, { nullable: true })
  orderBy?: Prisma.TimesheetFindManyArgs['orderBy'];

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => Int, { nullable: true })
  take?: number;
}

@ArgsType()
export class FindFirstTimesheetArg {
  @Field(() => DateFilterScalar, { nullable: true })
  date?: Date | DateFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  employeeId?: number | IntFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  hours?: number | IntFilterScalar;
}

@ArgsType()
export class FindUniqueTimesheetArg {
  @Field(() => Date, { nullable: false })
  date: Date;

  @Field(() => Int, { nullable: false })
  employeeId: number;
}

@ArgsType()
export class UpdateDataTimesheetArg {
  @Field(() => Date, { nullable: false })
  date: Date;

  @Field(() => Int, { nullable: false })
  hours: number;

  @Field(() => Int, { nullable: false })
  employeeId: number;
}

@ArgsType()
export class UpdateWhereTimesheetArg {
  @Field(() => Date, { nullable: false })
  date: Date;

  @Field(() => Int, { nullable: false })
  employeeId: number;
}
