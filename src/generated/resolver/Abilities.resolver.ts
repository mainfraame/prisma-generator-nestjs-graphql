import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { Abilities } from '../dto/Abilities.dto'

@Resolver(() => Abilities)
export class AbilitiesResolver {
  private prisma = new PrismaClient({})

  @Query(() => Abilities)
  async abilities(@Args('id', { type: () => Int }) id: number) {
    return this.prisma.abilities.findUnique({ where: { id } })
  }
}
