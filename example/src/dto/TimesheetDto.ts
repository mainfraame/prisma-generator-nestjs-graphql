import { Field, InputType, Int } from '@nestjs/graphql';

import { DateFilterScalar } from '../scalar/DateFilterScalar';
import { IntFilterScalar } from '../scalar/IntFilterScalar';

@InputType()
export class CreateTimesheetDto {
  @Field(() => Date, { nullable: false })
  date: Date;

  @Field(() => Int, { nullable: false })
  employeeId: number;

  @Field(() => Int, { nullable: false })
  hours: number;
}

@InputType()
export class DeleteTimesheetDto {
  @Field(() => Date, { nullable: false })
  date: Date;

  @Field(() => Int, { nullable: false })
  employeeId: number;
}

@InputType()
export class DeleteManyTimesheetDto {
  @Field(() => DateFilterScalar, { nullable: true })
  date?: Date | DateFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  employeeId?: number | IntFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  hours?: number | IntFilterScalar;
}

@InputType()
export class FindManyTimesheetDto {
  @Field(() => DateFilterScalar, { nullable: true })
  date?: Date | DateFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  employeeId?: number | IntFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  hours?: number | IntFilterScalar;
}

@InputType()
export class FindUniqueTimesheetDto {
  @Field(() => Date, { nullable: false })
  date: Date;

  @Field(() => Int, { nullable: false })
  employeeId: number;
}

@InputType()
export class UpdateDataTimesheetDto {
  @Field(() => Date, { nullable: false })
  date: Date;

  @Field(() => Int, { nullable: false })
  hours: number;

  @Field(() => Int, { nullable: false })
  employeeId: number;
}

@InputType()
export class UpdateManyWhereTimesheetDto {
  @Field(() => DateFilterScalar, { nullable: true })
  date?: Date | DateFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  employeeId?: number | IntFilterScalar;

  @Field(() => IntFilterScalar, { nullable: true })
  hours?: number | IntFilterScalar;
}

@InputType()
export class UpdateWhereTimesheetDto {
  @Field(() => Date, { nullable: false })
  date: Date;

  @Field(() => Int, { nullable: false })
  employeeId: number;
}
