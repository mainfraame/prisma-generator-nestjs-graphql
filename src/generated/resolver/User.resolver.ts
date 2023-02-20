import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { User } from '../dto/User.dto'

@Resolver(() => User)
export class UserResolver {
  private prisma = new PrismaClient({})

  @Query(() => User)
  async user(@Args('userId', { type: () => Int }) userId: number) {
    return this.prisma.user.findUnique({ where: { userId } })
  }
}
