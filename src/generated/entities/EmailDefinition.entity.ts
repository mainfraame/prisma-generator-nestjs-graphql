import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class EmailDefinition {
  @Field(() => Int, { nullable: false })
  definitionId: number;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  templateName: string;

  @Field(() => GraphQLJSONObject, { nullable: false })
  config: Record<string, unknown>;

  @Field(() => String, { nullable: false })
  version: string;

  @Field(() => Boolean, { nullable: false })
  enabled: boolean;
}
