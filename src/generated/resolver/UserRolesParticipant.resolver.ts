import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { UserRolesParticipant } from '../dto/UserRolesParticipant.dto'

@Resolver(() => UserRolesParticipant)
export class UserRolesParticipantResolver {
  private prisma = new PrismaClient({})

  @Query(() => UserRolesParticipant)
  async userRolesParticipant(@Args('id', { type: () => Int }) id: number) {
    return this.prisma.userRolesParticipant.findUnique({ where: { id } })
  }
}
