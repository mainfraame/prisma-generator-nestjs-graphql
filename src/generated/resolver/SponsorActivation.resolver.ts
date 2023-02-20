import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { SponsorActivation } from '../dto/SponsorActivation.dto'

@Resolver(() => SponsorActivation)
export class SponsorActivationResolver {
  private prisma = new PrismaClient({})

  @Query(() => SponsorActivation)
  async sponsorActivation(
    @Args('sponsorActivationId', { type: () => Int })
    sponsorActivationId: number,
  ) {
    return this.prisma.sponsorActivation.findUnique({
      where: { sponsorActivationId },
    })
  }
}
