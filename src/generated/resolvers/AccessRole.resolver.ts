import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateAccessRoleDto,
  DeleteAccessRoleDto,
  FindManyAccessRoleDto,
  FindUniqueAccessRoleDto,
  UpdateDataAccessRoleDto,
  UpdateWhereAccessRoleDto
} from '../dto/AccessRole.dto';
import { AccessRole } from '../entities/AccessRole.entity';

@Resolver(() => AccessRole)
export class AccessRoleResolver {
  @Query(() => AccessRole)
  async getAccessRole(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueAccessRoleDto })
    where: Prisma.AccessRoleFindUniqueArgs['where']
  ) {
    return context.prisma.accessRole.findUnique({ where });
  }

  @Query(() => [AccessRole])
  async getAllAccessRoles(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyAccessRoleDto })
    where: Prisma.AccessRoleFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.accessRole.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => AccessRole)
  async createAccessRole(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateAccessRoleDto })
    data: Prisma.AccessRoleCreateArgs['data']
  ) {
    return context.prisma.accessRole.create({ data });
  }

  @Mutation(() => AccessRole)
  async updateAccessRole(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereAccessRoleDto })
    where: Prisma.AccessRoleUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataAccessRoleDto })
    data: Prisma.AccessRoleUpdateArgs['data']
  ) {
    return context.prisma.accessRole.update({ where, data });
  }

  @Mutation(() => AccessRole)
  async removeAccessRole(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteAccessRoleDto })
    where: Prisma.AccessRoleDeleteArgs['where']
  ) {
    return context.prisma.accessRole.delete({ where });
  }
}
