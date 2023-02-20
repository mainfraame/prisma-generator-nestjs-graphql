import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { EmailWhiteLabel } from '../dto/EmailWhiteLabel.dto'

@Resolver(() => EmailWhiteLabel)
export class EmailWhiteLabelResolver {
  private prisma = new PrismaClient({})

  @Query(() => EmailWhiteLabel)
  async emailWhiteLabel(
    @Args('whitelabelContentId', { type: () => Int })
    whitelabelContentId: number,
  ) {
    return this.prisma.emailWhiteLabel.findUnique({
      where: { whitelabelContentId },
    })
  }
}
