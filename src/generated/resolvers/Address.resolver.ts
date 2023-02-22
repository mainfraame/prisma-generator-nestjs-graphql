import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateAddressDto,
  DeleteAddressDto,
  FindManyAddressDto,
  FindUniqueAddressDto,
  UpdateDataAddressDto,
  UpdateWhereAddressDto
} from '../dto/Address.dto';
import { Address } from '../entities/Address.entity';

@Resolver(() => Address)
export class AddressResolver {
  @Query(() => Address)
  async getAddress(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueAddressDto })
    where: Prisma.AddressFindUniqueArgs['where']
  ) {
    return context.prisma.address.findUnique({ where });
  }

  @Query(() => [Address])
  async getAllAddress(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyAddressDto })
    where: Prisma.AddressFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.address.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => Address)
  async createAddress(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateAddressDto })
    data: Prisma.AddressCreateArgs['data']
  ) {
    return context.prisma.address.create({ data });
  }

  @Mutation(() => Address)
  async updateAddress(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereAddressDto })
    where: Prisma.AddressUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataAddressDto })
    data: Prisma.AddressUpdateArgs['data']
  ) {
    return context.prisma.address.update({ where, data });
  }

  @Mutation(() => Address)
  async removeAddress(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteAddressDto })
    where: Prisma.AddressDeleteArgs['where']
  ) {
    return context.prisma.address.delete({ where });
  }
}
