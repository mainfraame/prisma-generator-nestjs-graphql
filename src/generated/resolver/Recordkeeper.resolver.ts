import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { Recordkeeper } from '../dto/Recordkeeper.dto'

@Resolver(() => Recordkeeper)
export class RecordkeeperResolver {
  private prisma = new PrismaClient({})

  @Query(() => Recordkeeper)
  async recordkeeper(
    @Args('recordkeeperId', { type: () => Int }) recordkeeperId: number,
  ) {
    return this.prisma.recordkeeper.findUnique({ where: { recordkeeperId } })
  }
}
