import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class AccessRole {
  @Field(() => Int, { nullable: false })
  accessRoleId: number;

  @Field(() => String, { nullable: false })
  accessRoleType: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => Boolean, { nullable: false })
  isDeprecated: boolean;

  @Field(() => Boolean, { nullable: false })
  isRetired: boolean;
}
