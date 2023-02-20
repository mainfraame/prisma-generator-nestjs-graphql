import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { AccessRole } from '../dto/AccessRole.dto'

@Resolver(() => AccessRole)
export class AccessRoleResolver {
  private prisma = new PrismaClient({})

  @Query(() => AccessRole)
  async accessRole(
    @Args('accessRoleId', { type: () => Int }) accessRoleId: number,
  ) {
    return this.prisma.accessRole.findUnique({ where: { accessRoleId } })
  }
}
