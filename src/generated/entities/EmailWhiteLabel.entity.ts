import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class EmailWhiteLabel {
  @Field(() => Int, { nullable: false })
  whitelabelContentId: number;

  @Field(() => Int, { nullable: false })
  definitionId: number;

  @Field(() => GraphQLJSONObject, { nullable: false })
  emailContent: Record<string, unknown>;

  @Field(() => String, { nullable: true })
  entity?: undefined;

  @Field(() => Int, { nullable: true })
  entityId?: number;
}
