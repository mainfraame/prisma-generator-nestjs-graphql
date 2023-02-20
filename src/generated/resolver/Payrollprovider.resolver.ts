import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { Payrollprovider } from '../dto/Payrollprovider.dto'

@Resolver(() => Payrollprovider)
export class PayrollproviderResolver {
  private prisma = new PrismaClient({})

  @Query(() => Payrollprovider)
  async payrollprovider(
    @Args('payrollProviderId', { type: () => Int }) payrollProviderId: number,
  ) {
    return this.prisma.payrollprovider.findUnique({
      where: { payrollProviderId },
    })
  }
}
