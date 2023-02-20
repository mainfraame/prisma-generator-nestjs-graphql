import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { UserMfaAttempt } from '../dto/UserMfaAttempt.dto'

@Resolver(() => UserMfaAttempt)
export class UserMfaAttemptResolver {
  private prisma = new PrismaClient({})

  @Query(() => UserMfaAttempt)
  async userMfaAttempt(@Args('id', { type: () => Int }) id: number) {
    return this.prisma.userMfaAttempt.findUnique({ where: { id } })
  }
}
