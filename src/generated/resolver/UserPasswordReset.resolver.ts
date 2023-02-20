import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { UserPasswordReset } from '../dto/UserPasswordReset.dto'

@Resolver(() => UserPasswordReset)
export class UserPasswordResetResolver {
  private prisma = new PrismaClient({})

  @Query(() => UserPasswordReset)
  async userPasswordReset(@Args('id', { type: () => Int }) id: number) {
    return this.prisma.userPasswordReset.findUnique({ where: { id } })
  }
}
