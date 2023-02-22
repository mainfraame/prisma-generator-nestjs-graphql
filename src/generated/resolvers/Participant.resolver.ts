import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateParticipantDto,
  DeleteParticipantDto,
  FindManyParticipantDto,
  FindUniqueParticipantDto,
  UpdateDataParticipantDto,
  UpdateWhereParticipantDto
} from '../dto/Participant.dto';
import { Participant } from '../entities/Participant.entity';

@Resolver(() => Participant)
export class ParticipantResolver {
  @Query(() => Participant)
  async getParticipant(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueParticipantDto })
    where: Prisma.ParticipantFindUniqueArgs['where']
  ) {
    return context.prisma.participant.findUnique({ where });
  }

  @Query(() => [Participant])
  async getAllParticipants(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyParticipantDto })
    where: Prisma.ParticipantFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.participant.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => Participant)
  async createParticipant(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateParticipantDto })
    data: Prisma.ParticipantCreateArgs['data']
  ) {
    return context.prisma.participant.create({ data });
  }

  @Mutation(() => Participant)
  async updateParticipant(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereParticipantDto })
    where: Prisma.ParticipantUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataParticipantDto })
    data: Prisma.ParticipantUpdateArgs['data']
  ) {
    return context.prisma.participant.update({ where, data });
  }

  @Mutation(() => Participant)
  async removeParticipant(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteParticipantDto })
    where: Prisma.ParticipantDeleteArgs['where']
  ) {
    return context.prisma.participant.delete({ where });
  }
}
