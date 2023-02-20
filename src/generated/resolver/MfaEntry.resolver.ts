import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { MfaEntry } from '../dto/MfaEntry.dto'

@Resolver(() => MfaEntry)
export class MfaEntryResolver {
  private prisma = new PrismaClient({})

  @Query(() => MfaEntry)
  async mfaEntry(@Args('mfaEntryId', { type: () => Int }) mfaEntryId: number) {
    return this.prisma.mfaEntry.findUnique({ where: { mfaEntryId } })
  }
}
