import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { EmailDefinition } from '../dto/EmailDefinition.dto'

@Resolver(() => EmailDefinition)
export class EmailDefinitionResolver {
  private prisma = new PrismaClient({})

  @Query(() => EmailDefinition)
  async emailDefinition(
    @Args('definitionId', { type: () => Int }) definitionId: number,
  ) {
    return this.prisma.emailDefinition.findUnique({ where: { definitionId } })
  }
}
