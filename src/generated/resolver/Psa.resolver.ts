import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { Psa } from '../dto/Psa.dto'

@Resolver(() => Psa)
export class PsaResolver {
  private prisma = new PrismaClient({})

  @Query(() => Psa)
  async psa(@Args('psaId', { type: () => Int }) psaId: number) {
    return this.prisma.psa.findUnique({ where: { psaId } })
  }
}
