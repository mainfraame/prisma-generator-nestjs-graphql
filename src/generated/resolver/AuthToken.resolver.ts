import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { AuthToken } from '../dto/AuthToken.dto'

@Resolver(() => AuthToken)
export class AuthTokenResolver {
  private prisma = new PrismaClient({})

  @Query(() => AuthToken)
  async authToken(
    @Args('authTokenId', { type: () => Int }) authTokenId: number,
  ) {
    return this.prisma.authToken.findUnique({ where: { authTokenId } })
  }
}
