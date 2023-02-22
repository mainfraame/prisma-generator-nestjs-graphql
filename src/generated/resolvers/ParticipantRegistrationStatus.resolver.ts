import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateParticipantRegistrationStatusDto,
  DeleteParticipantRegistrationStatusDto,
  FindManyParticipantRegistrationStatusDto,
  FindUniqueParticipantRegistrationStatusDto,
  UpdateDataParticipantRegistrationStatusDto,
  UpdateWhereParticipantRegistrationStatusDto
} from '../dto/ParticipantRegistrationStatus.dto';
import { ParticipantRegistrationStatus } from '../entities/ParticipantRegistrationStatus.entity';

@Resolver(() => ParticipantRegistrationStatus)
export class ParticipantRegistrationStatusResolver {
  @Query(() => ParticipantRegistrationStatus)
  async getParticipantRegistrationStatus(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueParticipantRegistrationStatusDto })
    where: Prisma.ParticipantRegistrationStatusFindUniqueArgs['where']
  ) {
    return context.prisma.participantRegistrationStatus.findUnique({ where });
  }

  @Query(() => [ParticipantRegistrationStatus])
  async getAllParticipantRegistrationStatus(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyParticipantRegistrationStatusDto })
    where: Prisma.ParticipantRegistrationStatusFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.participantRegistrationStatus.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => ParticipantRegistrationStatus)
  async createParticipantRegistrationStatus(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateParticipantRegistrationStatusDto })
    data: Prisma.ParticipantRegistrationStatusCreateArgs['data']
  ) {
    return context.prisma.participantRegistrationStatus.create({ data });
  }

  @Mutation(() => ParticipantRegistrationStatus)
  async updateParticipantRegistrationStatus(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereParticipantRegistrationStatusDto })
    where: Prisma.ParticipantRegistrationStatusUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataParticipantRegistrationStatusDto })
    data: Prisma.ParticipantRegistrationStatusUpdateArgs['data']
  ) {
    return context.prisma.participantRegistrationStatus.update({ where, data });
  }

  @Mutation(() => ParticipantRegistrationStatus)
  async removeParticipantRegistrationStatus(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteParticipantRegistrationStatusDto })
    where: Prisma.ParticipantRegistrationStatusDeleteArgs['where']
  ) {
    return context.prisma.participantRegistrationStatus.delete({ where });
  }
}
