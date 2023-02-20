import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { PartnerSystemMapping } from '../dto/PartnerSystemMapping.dto'

@Resolver(() => PartnerSystemMapping)
export class PartnerSystemMappingResolver {
  private prisma = new PrismaClient({})

  @Query(() => PartnerSystemMapping)
  async partnerSystemMapping(
    @Args('partnerSystemMappingId', { type: () => Int })
    partnerSystemMappingId: number,
  ) {
    return this.prisma.partnerSystemMapping.findUnique({
      where: { partnerSystemMappingId },
    })
  }
}
