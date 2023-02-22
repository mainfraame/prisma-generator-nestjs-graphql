import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateRegistrationAgreementEventDto,
  DeleteRegistrationAgreementEventDto,
  FindManyRegistrationAgreementEventDto,
  FindUniqueRegistrationAgreementEventDto,
  UpdateDataRegistrationAgreementEventDto,
  UpdateWhereRegistrationAgreementEventDto
} from '../dto/RegistrationAgreementEvent.dto';
import { RegistrationAgreementEvent } from '../entities/RegistrationAgreementEvent.entity';

@Resolver(() => RegistrationAgreementEvent)
export class RegistrationAgreementEventResolver {
  @Query(() => RegistrationAgreementEvent)
  async getRegistrationAgreementEvent(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueRegistrationAgreementEventDto })
    where: Prisma.RegistrationAgreementEventFindUniqueArgs['where']
  ) {
    return context.prisma.registrationAgreementEvent.findUnique({ where });
  }

  @Query(() => [RegistrationAgreementEvent])
  async getAllRegistrationAgreementEvents(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyRegistrationAgreementEventDto })
    where: Prisma.RegistrationAgreementEventFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.registrationAgreementEvent.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => RegistrationAgreementEvent)
  async createRegistrationAgreementEvent(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateRegistrationAgreementEventDto })
    data: Prisma.RegistrationAgreementEventCreateArgs['data']
  ) {
    return context.prisma.registrationAgreementEvent.create({ data });
  }

  @Mutation(() => RegistrationAgreementEvent)
  async updateRegistrationAgreementEvent(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereRegistrationAgreementEventDto })
    where: Prisma.RegistrationAgreementEventUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataRegistrationAgreementEventDto })
    data: Prisma.RegistrationAgreementEventUpdateArgs['data']
  ) {
    return context.prisma.registrationAgreementEvent.update({ where, data });
  }

  @Mutation(() => RegistrationAgreementEvent)
  async removeRegistrationAgreementEvent(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteRegistrationAgreementEventDto })
    where: Prisma.RegistrationAgreementEventDeleteArgs['where']
  ) {
    return context.prisma.registrationAgreementEvent.delete({ where });
  }
}
