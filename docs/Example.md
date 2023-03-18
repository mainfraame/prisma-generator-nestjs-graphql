# Example

_*_ ESM & CJS files are also generated.

Below is the output generated from the project's [public.prisma](../public.prisma):

```
generator client {
  provider        = "prisma-client-js"
  binaryTargets   = ["native"]
  previewFeatures = ["multiSchema"]
}

datasource db {
  provider = "postgresql"
  url      = env("POSTGRES_URL")
  schemas  = ["public"]
}

generator nestJsGraphqlCrud {
  provider = "prisma-generator-nestjs-graphql-crud"
}

model User {
  userId               Int                    @id @default(autoincrement()) @map("user_id")
  email                String?                @db.VarChar(512)
  password             String?                @db.VarChar(512)
  createdAt            DateTime?              @map("created_at") @db.Timestamptz(6)
  updatedAt            DateTime?              @map("updated_at") @db.Timestamptz(6)

  @@map("user")
  @@schema("public")
}
```

`@generated/graphql/src/dto/User.dto.ts`
```typescript
import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateUserDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;

  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class DeleteUserDto {
  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class FindManyUserDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;

  @Field(() => Int, { nullable: true })
  userId?: number;
}

@InputType()
export class FindUniqueUserDto {
  @Field(() => Int, { nullable: false })
  userId: number;
}

@InputType()
export class UpdateDataUserDto {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;
}

@InputType()
export class UpdateWhereUserDto {
  @Field(() => Int, { nullable: false })
  userId: number;
}
```

`@generated/graphql/src/entities/User.entity.ts`
```typescript
import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class User {
  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;
}
```

`@generated/graphql/src/resolvers/User.resolver.ts`
```typescript
import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Prisma, PrismaClient } from '@prisma/client';

import {
  CreateUserDto,
  DeleteUserDto,
  FindManyUserDto,
  FindUniqueUserDto,
  UpdateDataUserDto,
  UpdateWhereUserDto
} from '../dto/User.dto';
import { User } from '../entities/User.entity';

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  async getUser(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindUniqueUserDto })
      where: Prisma.UserFindUniqueArgs['where']
  ) {
    return context.prisma.user.findUnique({ where });
  }

  @Query(() => [User])
  async getAllUsers(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => FindManyUserDto })
      where: Prisma.UserFindManyArgs['where'],
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number
  ) {
    return context.prisma.user.findMany({
      where,
      skip: skip ?? 0,
      take: take ?? 100
    });
  }

  @Mutation(() => User)
  async createUser(
    @Context() context: { prisma: PrismaClient },
    @Args('data', { type: () => CreateUserDto })
      data: Prisma.UserCreateArgs['data']
  ) {
    return context.prisma.user.create({ data });
  }

  @Mutation(() => User)
  async deleteUser(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => DeleteUserDto })
      where: Prisma.UserDeleteArgs['where']
  ) {
    return context.prisma.user.delete({ where });
  }

  @Mutation(() => User)
  async updateUser(
    @Context() context: { prisma: PrismaClient },
    @Args('where', { type: () => UpdateWhereUserDto })
      where: Prisma.UserUpdateArgs['where'],
    @Args('data', { type: () => UpdateDataUserDto })
      data: Prisma.UserUpdateArgs['data']
  ) {
    return context.prisma.user.update({ where, data });
  }
}
```


`@generated/graphql/src/index.ts`
```typescript
import { UserResolver } from './resolvers/User.resolver';

export * from './dto/User.dto';
export * from './entities/User.entity';

export const resolvers = [UserResolver];

```

