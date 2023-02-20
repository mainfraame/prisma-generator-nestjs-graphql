import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { Advisor } from '../dto/Advisor.dto'

@Resolver(() => Advisor)
export class AdvisorResolver {
  private prisma = new PrismaClient({})

  @Query(() => Advisor)
  async advisor(@Args('advisorId', { type: () => Int }) advisorId: number) {
    return this.prisma.advisor.findUnique({ where: { advisorId } })
  }
}
