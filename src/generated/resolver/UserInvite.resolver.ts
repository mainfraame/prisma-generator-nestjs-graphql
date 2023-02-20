import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { UserInvite } from '../dto/UserInvite.dto'

@Resolver(() => UserInvite)
export class UserInviteResolver {
  private prisma = new PrismaClient({})

  @Query(() => UserInvite)
  async userInvite(
    @Args('userInviteId', { type: () => Int }) userInviteId: number,
  ) {
    return this.prisma.userInvite.findUnique({ where: { userInviteId } })
  }
}
