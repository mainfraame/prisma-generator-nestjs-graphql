import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { MfaSetup } from '../dto/MfaSetup.dto'

@Resolver(() => MfaSetup)
export class MfaSetupResolver {
  private prisma = new PrismaClient({})

  @Query(() => MfaSetup)
  async mfaSetup(@Args('id', { type: () => Int }) id: number) {
    return this.prisma.mfaSetup.findUnique({ where: { id } })
  }
}
