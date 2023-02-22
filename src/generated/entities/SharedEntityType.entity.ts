import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class SharedEntityType {
  @Field(() => Int, { nullable: false })
  sharedEntityTypeId: number;

  @Field(() => String, { nullable: false })
  name: string;
}
