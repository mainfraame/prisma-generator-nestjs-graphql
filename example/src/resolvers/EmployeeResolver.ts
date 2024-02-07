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
  FindFirstEmployeeArg,
  FindManyEmployeeArg,
  FindUniqueEmployeeArg
} from '../arg/EmployeeArg';
import { Employee } from '../entities/EmployeeEntity';
import { Timesheet } from '../entities/TimesheetEntity';
import { GraphQlContext } from '../types';

@Resolver(() => Employee)
export class EmployeeResolver {
  @Query(() => Employee, { nullable: true })
  async findFirstEmployee(
    @Context() ctx: GraphQlContext,
    @Args() where: FindFirstEmployeeArg
  ) {
    return ctx.prisma.employee.findFirst({
      where: where as unknown as Prisma.EmployeeFindFirstArgs['where']
    });
  }

  @Query(() => Employee, { nullable: true })
  async findUniqueEmployee(
    @Context() ctx: GraphQlContext,
    @Args() where: FindUniqueEmployeeArg
  ) {
    return ctx.prisma.employee.findUnique({
      where
    });
  }

  @Query(() => [Employee])
  async findManyEmployee(
    @Context() ctx: GraphQlContext,
    @Args() { skip, take, orderBy, ...where }: FindManyEmployeeArg
  ) {
    return ctx.prisma.employee.findMany({
      orderBy: orderBy as unknown as Prisma.EmployeeFindManyArgs['orderBy'],
      skip: skip ?? 0,
      take: take ?? 100,
      where: where as unknown as Prisma.EmployeeFindManyArgs['where']
    });
  }

  @ResolveField(() => [Timesheet], {
    nullable: 'itemsAndList',
    defaultValue: []
  })
  async timesheets(@Context() ctx: GraphQlContext, @Parent() parent: Employee) {
    return ctx.loaders.employeeTimesheets.load(parent.id);
  }
}
