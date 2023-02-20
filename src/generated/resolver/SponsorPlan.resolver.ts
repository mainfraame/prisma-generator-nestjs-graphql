import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { SponsorPlan } from '../dto/SponsorPlan.dto'

@Resolver(() => SponsorPlan)
export class SponsorPlanResolver {
  private prisma = new PrismaClient({})

  @Query(() => SponsorPlan)
  async sponsorPlan(
    @Args('sponsorPlanId', { type: () => Int }) sponsorPlanId: number,
  ) {
    return this.prisma.sponsorPlan.findUnique({ where: { sponsorPlanId } })
  }
}
