import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { SponsorPlanModel } from '../dto/SponsorPlanModel.dto'

@Resolver(() => SponsorPlanModel)
export class SponsorPlanModelResolver {
  private prisma = new PrismaClient({})

  @Query(() => SponsorPlanModel)
  async sponsorPlanModel(
    @Args('sponsorPlanModelId', { type: () => Int }) sponsorPlanModelId: number,
  ) {
    return this.prisma.sponsorPlanModel.findUnique({
      where: { sponsorPlanModelId },
    })
  }
}
