import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { Model } from '../dto/Model.dto'

@Resolver(() => Model)
export class ModelResolver {
  private prisma = new PrismaClient({})

  @Query(() => Model)
  async model(@Args('modelId', { type: () => Int }) modelId: number) {
    return this.prisma.model.findUnique({ where: { modelId } })
  }
}
