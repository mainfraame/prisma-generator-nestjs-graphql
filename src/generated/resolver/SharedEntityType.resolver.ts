import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { SharedEntityType } from '../dto/SharedEntityType.dto'

@Resolver(() => SharedEntityType)
export class SharedEntityTypeResolver {
  private prisma = new PrismaClient({})

  @Query(() => SharedEntityType)
  async sharedEntityType(
    @Args('sharedEntityTypeId', { type: () => Int }) sharedEntityTypeId: number,
  ) {
    return this.prisma.sharedEntityType.findUnique({
      where: { sharedEntityTypeId },
    })
  }
}
