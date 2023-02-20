import { Args, Resolver, Int, Query } from '@nestjs/graphql'
import { PrismaClient } from '@prisma/client'

import { Address } from '../dto/Address.dto'

@Resolver(() => Address)
export class AddressResolver {
  private prisma = new PrismaClient({})

  @Query(() => Address)
  async address(@Args('addressId', { type: () => Int }) addressId: number) {
    return this.prisma.address.findUnique({ where: { addressId } })
  }
}
