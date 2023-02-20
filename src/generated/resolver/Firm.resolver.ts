import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { Firm } from '../dto/Firm.dto'

@Resolver(() => Firm)
export class FirmResolver {
  private prisma = new PrismaClient({})

  @Query(() => Firm)
  async firm(@Args('firmId', { type: () => Int }) firmId: number) {
    return this.prisma.firm.findUnique({ where: { firmId } })
  }
}
