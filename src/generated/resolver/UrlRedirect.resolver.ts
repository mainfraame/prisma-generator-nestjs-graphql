import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { UrlRedirect } from '../dto/UrlRedirect.dto'

@Resolver(() => UrlRedirect)
export class UrlRedirectResolver {
  private prisma = new PrismaClient({})

  @Query(() => UrlRedirect)
  async urlRedirect(
    @Args('urlRedirectId', { type: () => Int }) urlRedirectId: number,
  ) {
    return this.prisma.urlRedirect.findUnique({ where: { urlRedirectId } })
  }
}
