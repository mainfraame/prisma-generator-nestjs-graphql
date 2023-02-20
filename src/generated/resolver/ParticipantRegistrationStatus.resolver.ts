import { Args, Resolver, Int, Query } from "@nestjs/graphql";
import { PrismaClient } from "@prisma/client";

import { ParticipantRegistrationStatus } from "../dto/ParticipantRegistrationStatus.dto";

@Resolver(() => ParticipantRegistrationStatus)
export class ParticipantRegistrationStatusResolver {
  private prisma = new PrismaClient({});

  @Query(() => ParticipantRegistrationStatus)
  async participantRegistrationStatus(
    @Args("registrationStatusId", { type: () => Int })
      registrationStatusId: number
  ) {
    return this.prisma.participantRegistrationStatus.findUnique({
      where: { registrationStatusId }
    });
  }
}
