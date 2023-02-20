import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { UserRolesAdvisor } from '../dto/UserRolesAdvisor.dto'

@Resolver(() => UserRolesAdvisor)
export class UserRolesAdvisorResolver {
  private prisma = new PrismaClient({})

  @Query(() => UserRolesAdvisor)
  async userRolesAdvisor(@Args('id', { type: () => Int }) id: number) {
    return this.prisma.userRolesAdvisor.findUnique({ where: { id } })
  }
}
