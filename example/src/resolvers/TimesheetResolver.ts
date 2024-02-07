import {
  Args,
  Context,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import {
  FindFirstTimesheetArg,
  FindManyTimesheetArg,
  FindUniqueTimesheetArg
} from '../arg/TimesheetArg';
import { Employee } from '../entities/EmployeeEntity';
import { Timesheet } from '../entities/TimesheetEntity';
import { GraphQlContext } from '../types';

@Resolver(() => Timesheet)
export class TimesheetResolver {
  @Query(() => Timesheet, { nullable: true })
  async findFirstTimesheet(
    @Context() ctx: GraphQlContext,
    @Args() where: FindFirstTimesheetArg
  ) {
    return ctx.prisma.timesheet.findFirst({
      where: where as unknown as Prisma.TimesheetFindFirstArgs['where']
    });
  }

  @Query(() => Timesheet, { nullable: true })
  async findUniqueTimesheet(
    @Context() ctx: GraphQlContext,
    @Args() where: FindUniqueTimesheetArg
  ) {
    return ctx.prisma.timesheet.findUnique({
      where: {
        date_employeeId: { date: where.date, employeeId: where.employeeId }
      }
    });
  }

  @Query(() => [Timesheet])
  async findManyTimesheet(
    @Context() ctx: GraphQlContext,
    @Args() { skip, take, orderBy, ...where }: FindManyTimesheetArg
  ) {
    return ctx.prisma.timesheet.findMany({
      orderBy: orderBy as unknown as Prisma.TimesheetFindManyArgs['orderBy'],
      skip: skip ?? 0,
      take: take ?? 100,
      where: where as unknown as Prisma.TimesheetFindManyArgs['where']
    });
  }

  @ResolveField(() => Employee, { nullable: false })
  async employee(@Context() ctx: GraphQlContext, @Parent() parent: Timesheet) {
    return ctx.loaders.timesheetEmployee.load(parent.employeeId);
  }
}
