import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { AccessRoleAbilities } from '../dto/AccessRoleAbilities.dto'

@Resolver(() => AccessRoleAbilities)
export class AccessRoleAbilitiesResolver {
  private prisma = new PrismaClient({})

  @Query(() => AccessRoleAbilities)
  async accessRoleAbilities(@Args('id', { type: () => Int }) id: number) {
    return this.prisma.accessRoleAbilities.findUnique({ where: { id } })
  }
}
