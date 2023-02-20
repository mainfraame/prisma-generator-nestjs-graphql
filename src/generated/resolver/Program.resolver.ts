import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { Program } from '../dto/Program.dto'

@Resolver(() => Program)
export class ProgramResolver {
  private prisma = new PrismaClient({})

  @Query(() => Program)
  async program(@Args('programId', { type: () => Int }) programId: number) {
    return this.prisma.program.findUnique({ where: { programId } })
  }
}
