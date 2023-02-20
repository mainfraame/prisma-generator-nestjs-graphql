import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { StatefulSchemaTracking } from '../dto/StatefulSchemaTracking.dto'

@Resolver(() => StatefulSchemaTracking)
export class StatefulSchemaTrackingResolver {
  private prisma = new PrismaClient({})

  @Query(() => StatefulSchemaTracking)
  async statefulSchemaTracking(
    @Args('statefulSchemaTrackingId', { type: () => Int })
    statefulSchemaTrackingId: number,
  ) {
    return this.prisma.statefulSchemaTracking.findUnique({
      where: { statefulSchemaTrackingId },
    })
  }
}
