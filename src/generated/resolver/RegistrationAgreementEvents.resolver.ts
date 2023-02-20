import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { RegistrationAgreementEvents } from '../dto/RegistrationAgreementEvents.dto'

@Resolver(() => RegistrationAgreementEvents)
export class RegistrationAgreementEventsResolver {
  private prisma = new PrismaClient({})

  @Query(() => RegistrationAgreementEvents)
  async registrationAgreementEvents(
    @Args('eventId', { type: () => Int }) eventId: number,
  ) {
    return this.prisma.registrationAgreementEvents.findUnique({
      where: { eventId },
    })
  }
}
