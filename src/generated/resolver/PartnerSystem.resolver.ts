import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { PartnerSystem } from '../dto/PartnerSystem.dto'

@Resolver(() => PartnerSystem)
export class PartnerSystemResolver {
  private prisma = new PrismaClient({})

  @Query(() => PartnerSystem)
  async partnerSystem(
    @Args('partnerSystemId', { type: () => Int }) partnerSystemId: number,
  ) {
    return this.prisma.partnerSystem.findUnique({ where: { partnerSystemId } })
  }
}
