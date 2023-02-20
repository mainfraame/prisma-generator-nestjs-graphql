import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { CensusRecords } from '../dto/CensusRecords.dto'

@Resolver(() => CensusRecords)
export class CensusRecordsResolver {
  private prisma = new PrismaClient({})

  @Query(() => CensusRecords)
  async censusRecords(
    @Args('censusRecordsId', { type: () => Int }) censusRecordsId: number,
  ) {
    return this.prisma.censusRecords.findUnique({ where: { censusRecordsId } })
  }
}
