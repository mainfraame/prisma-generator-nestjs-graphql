import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { FeatureToggleGlobal } from '../dto/FeatureToggleGlobal.dto'

@Resolver(() => FeatureToggleGlobal)
export class FeatureToggleGlobalResolver {
  private prisma = new PrismaClient({})

  @Query(() => FeatureToggleGlobal)
  async featureToggleGlobal(
    @Args('featureToggleGlobalId', { type: () => Int })
    featureToggleGlobalId: number,
  ) {
    return this.prisma.featureToggleGlobal.findUnique({
      where: { featureToggleGlobalId },
    })
  }
}
