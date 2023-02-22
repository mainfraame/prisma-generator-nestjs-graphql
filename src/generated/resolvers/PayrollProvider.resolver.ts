import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreatePayrollProviderDto,
  DeletePayrollProviderDto,
  FindManyPayrollProviderDto,
  FindUniquePayrollProviderDto,
  UpdateDataPayrollProviderDto,
  UpdateWherePayrollProviderDto
} from '../dto/PayrollProvider.dto';
import { PayrollProvider } from '../entities/PayrollProvider.entity';

@Resolver(() => PayrollProvider)
export class PayrollProviderResolver {
  @Query(() => PayrollProvider)
  async getPayrollProvider(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniquePayrollProviderDto })
    where: Prisma.PayrollProviderFindUniqueArgs['where']
  ) {
    return context.prisma.payrollProvider.findUnique({ where });
  }

  @Query(() => [PayrollProvider])
  async getAllPayrollProviders(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyPayrollProviderDto })
    where: Prisma.PayrollProviderFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.payrollProvider.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => PayrollProvider)
  async createPayrollProvider(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreatePayrollProviderDto })
    data: Prisma.PayrollProviderCreateArgs['data']
  ) {
    return context.prisma.payrollProvider.create({ data });
  }

  @Mutation(() => PayrollProvider)
  async updatePayrollProvider(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWherePayrollProviderDto })
    where: Prisma.PayrollProviderUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataPayrollProviderDto })
    data: Prisma.PayrollProviderUpdateArgs['data']
  ) {
    return context.prisma.payrollProvider.update({ where, data });
  }

  @Mutation(() => PayrollProvider)
  async removePayrollProvider(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeletePayrollProviderDto })
    where: Prisma.PayrollProviderDeleteArgs['where']
  ) {
    return context.prisma.payrollProvider.delete({ where });
  }
}
