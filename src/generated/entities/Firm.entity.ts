import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@ObjectType()
export class Firm {
  @Field(() => Int, { nullable: false })
  firmId: number;

  @Field(() => Boolean, { nullable: true })
  allowOverride?: boolean;

  @Field(() => String, { nullable: true })
  companyName?: string;

  @Field(() => String, { nullable: true })
  homeOfficeName?: string;

  @Field(() => String, { nullable: true })
  subDomain?: string;

  @Field(() => String, { nullable: true })
  loginSubDomain?: string;

  @Field(() => String, { nullable: true })
  cssFileName?: string;

  @Field(() => String, { nullable: true })
  address1?: string;

  @Field(() => String, { nullable: true })
  address2?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  zip?: string;

  @Field(() => String, { nullable: true })
  logo?: string;

  @Field(() => String, { nullable: true })
  clientSupportStrategy?: string;

  @Field(() => Float, { nullable: true })
  fee?: number;

  @Field(() => String, { nullable: true })
  businessDescription?: string;

  @Field(() => String, { nullable: true })
  disclaimers?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  applicationDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  activationDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  cssFolder?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => Boolean, { nullable: true })
  isActive?: boolean;

  @Field(() => String, { nullable: true })
  firmType?: string;

  @Field(() => String, { nullable: true })
  website?: string;

  @Field(() => String, { nullable: true })
  mainPhoneNumber?: string;

  @Field(() => Float, { nullable: true })
  retirementPlanAssets?: number;

  @Field(() => Int, { nullable: true })
  advisorCount?: number;

  @Field(() => String, { nullable: true })
  contactName?: string;

  @Field(() => Boolean, { nullable: true })
  migratedFromFirm1?: boolean;

  @Field(() => String, { nullable: true })
  externalFirmId?: string;
}
