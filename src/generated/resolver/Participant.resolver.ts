import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { Participant } from '../dto/Participant.dto'

@Resolver(() => Participant)
export class ParticipantResolver {
  private prisma = new PrismaClient({})

  @Query(() => Participant)
  async participant(
    @Args('participantId', { type: () => Int }) participantId: number,
  ) {
    return this.prisma.participant.findUnique({ where: { participantId } })
  }
}
