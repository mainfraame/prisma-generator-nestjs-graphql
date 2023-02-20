import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { Sponsor } from '../dto/Sponsor.dto'

@Resolver(() => Sponsor)
export class SponsorResolver {
  private prisma = new PrismaClient({})

  @Query(() => Sponsor)
  async sponsor(@Args('sponsorId', { type: () => Int }) sponsorId: number) {
    return this.prisma.sponsor.findUnique({ where: { sponsorId } })
  }
}
