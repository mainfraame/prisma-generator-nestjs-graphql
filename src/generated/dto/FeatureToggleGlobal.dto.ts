import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateFeatureToggleGlobalDto {
  @Field(() => String, { nullable: true })
  featureDescription?: string;

  @Field(() => String, { nullable: true })
  featureName?: string;

  @Field(() => Int, { nullable: false })
  featureToggleGlobalId: number;

  @Field(() => Boolean, { nullable: true })
  isEnabled?: boolean;
}

@InputType()
export class DeleteFeatureToggleGlobalDto {
  @Field(() => Int, { nullable: false })
  featureToggleGlobalId: number;
}

@InputType()
export class FindManyFeatureToggleGlobalDto {
  @Field(() => String, { nullable: true })
  featureDescription?: string;

  @Field(() => String, { nullable: true })
  featureName?: string;

  @Field(() => Int, { nullable: true })
  featureToggleGlobalId?: number;

  @Field(() => Boolean, { nullable: true })
  isEnabled?: boolean;
}

@InputType()
export class FindUniqueFeatureToggleGlobalDto {
  @Field(() => Int, { nullable: false })
  featureToggleGlobalId: number;
}

@InputType()
export class UpdateDataFeatureToggleGlobalDto {
  @Field(() => String, { nullable: true })
  featureName?: string;

  @Field(() => Boolean, { nullable: true })
  isEnabled?: boolean;

  @Field(() => String, { nullable: true })
  featureDescription?: string;
}

@InputType()
export class UpdateWhereFeatureToggleGlobalDto {
  @Field(() => Int, { nullable: false })
  featureToggleGlobalId: number;
}
