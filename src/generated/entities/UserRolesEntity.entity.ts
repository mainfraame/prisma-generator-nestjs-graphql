import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class UserRolesEntity {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => Int, { nullable: false })
  accessRoleId: number;

  @Field(() => String, { nullable: false })
  entityType: string;

  @Field(() => Int, { nullable: false })
  entityId: number;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;
}
