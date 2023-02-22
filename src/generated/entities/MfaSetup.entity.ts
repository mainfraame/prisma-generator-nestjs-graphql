import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class MfaSetup {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => String, { nullable: false })
  entryType: string;

  @Field(() => String, { nullable: true })
  value?: string;

  @Field(() => String, { nullable: false })
  secret: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;
}
