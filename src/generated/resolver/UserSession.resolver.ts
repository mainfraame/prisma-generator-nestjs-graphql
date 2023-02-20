import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { UserSession } from '../dto/UserSession.dto'

@Resolver(() => UserSession)
export class UserSessionResolver {
  private prisma = new PrismaClient({})

  @Query(() => UserSession)
  async userSession(@Args('id', { type: () => Int }) id: number) {
    return this.prisma.userSession.findUnique({ where: { id } })
  }
}
