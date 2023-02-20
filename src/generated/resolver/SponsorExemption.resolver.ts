import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { SponsorExemption } from '../dto/SponsorExemption.dto'

@Resolver(() => SponsorExemption)
export class SponsorExemptionResolver {
  private prisma = new PrismaClient({})

  @Query(() => SponsorExemption)
  async sponsorExemption(
    @Args('sponsorExemptionId', { type: () => Int }) sponsorExemptionId: number,
  ) {
    return this.prisma.sponsorExemption.findUnique({
      where: { sponsorExemptionId },
    })
  }
}
