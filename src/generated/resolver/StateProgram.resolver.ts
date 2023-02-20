import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { StateProgram } from '../dto/StateProgram.dto'

@Resolver(() => StateProgram)
export class StateProgramResolver {
  private prisma = new PrismaClient({})

  @Query(() => StateProgram)
  async stateProgram(@Args('id', { type: () => Int }) id: number) {
    return this.prisma.stateProgram.findUnique({ where: { id } })
  }
}
