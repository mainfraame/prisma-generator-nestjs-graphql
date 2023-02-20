import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { UserRolesSponsor } from '../dto/UserRolesSponsor.dto'

@Resolver(() => UserRolesSponsor)
export class UserRolesSponsorResolver {
  private prisma = new PrismaClient({})

  @Query(() => UserRolesSponsor)
  async userRolesSponsor(@Args('id', { type: () => Int }) id: number) {
    return this.prisma.userRolesSponsor.findUnique({ where: { id } })
  }
}
