import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { UserRolesEntity } from '../dto/UserRolesEntity.dto'

@Resolver(() => UserRolesEntity)
export class UserRolesEntityResolver {
  private prisma = new PrismaClient({})

  @Query(() => UserRolesEntity)
  async userRolesEntity(@Args('id', { type: () => Int }) id: number) {
    return this.prisma.userRolesEntity.findUnique({ where: { id } })
  }
}
