import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { AdvisorRegistrationStatus } from '../dto/AdvisorRegistrationStatus.dto'

@Resolver(() => AdvisorRegistrationStatus)
export class AdvisorRegistrationStatusResolver {
  private prisma = new PrismaClient({})

  @Query(() => AdvisorRegistrationStatus)
  async advisorRegistrationStatus(
    @Args('advisorRegistrationStatusId', { type: () => Int })
    advisorRegistrationStatusId: number,
  ) {
    return this.prisma.advisorRegistrationStatus.findUnique({
      where: { advisorRegistrationStatusId },
    })
  }
}
