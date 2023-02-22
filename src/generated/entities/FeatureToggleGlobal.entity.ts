import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class FeatureToggleGlobal {
  @Field(() => Int, { nullable: false })
  featureToggleGlobalId: number;

  @Field(() => String, { nullable: true })
  featureName?: string;

  @Field(() => Boolean, { nullable: true })
  isEnabled?: boolean;

  @Field(() => String, { nullable: true })
  featureDescription?: string;
}
