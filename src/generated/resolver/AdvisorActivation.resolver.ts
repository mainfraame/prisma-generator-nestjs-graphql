import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { AdvisorActivation } from '../dto/AdvisorActivation.dto'

@Resolver(() => AdvisorActivation)
export class AdvisorActivationResolver {
  private prisma = new PrismaClient({})

  @Query(() => AdvisorActivation)
  async advisorActivation(
    @Args('advisorActivationId', { type: () => Int })
    advisorActivationId: number,
  ) {
    return this.prisma.advisorActivation.findUnique({
      where: { advisorActivationId },
    })
  }
}
