import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { FeatureToggleLocal } from '../dto/FeatureToggleLocal.dto'

@Resolver(() => FeatureToggleLocal)
export class FeatureToggleLocalResolver {
  private prisma = new PrismaClient({})

  @Query(() => FeatureToggleLocal)
  async featureToggleLocal(
    @Args('featureToggleLocalId', { type: () => Int })
    featureToggleLocalId: number,
  ) {
    return this.prisma.featureToggleLocal.findUnique({
      where: { featureToggleLocalId },
    })
  }
}
