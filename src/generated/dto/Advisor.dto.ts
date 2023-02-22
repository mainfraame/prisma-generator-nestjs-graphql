import { Field, Float, InputType, Int } from '@nestjs/graphql';

import {
  GraphQLBigInt,
  GraphQLDateTime,
  GraphQLJSONObject
} from 'graphql-scalars';

@InputType()
export class CreateAdvisorDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  activationDate?: Date;

  @Field(() => String, { nullable: true })
  address1?: string;

  @Field(() => String, { nullable: true })
  address2?: string;

  @Field(() => Int, { nullable: false })
  advisorId: number;

  @Field(() => String, { nullable: true })
  advisorType?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  applicationDate?: Date;

  @Field(() => String, { nullable: true })
  businessDescription?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  clientSupportStrategy?: string;

  @Field(() => String, { nullable: true })
  companyEntityType?: string;

  @Field(() => String, { nullable: true })
  companyName?: string;

  @Field(() => String, { nullable: true })
  companySize?: string;

  @Field(() => String, { nullable: true })
  crdNumber?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => String, { nullable: true })
  disclaimers?: string;

  @Field(() => String, { nullable: true })
  doingBusinessAs?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => Float, { nullable: true })
  fee?: number;

  @Field(() => Int, { nullable: true })
  firmId?: number;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  homeOfficeName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  logo?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  primaryContactEmail?: string;

  @Field(() => String, { nullable: true })
  primaryContactName?: string;

  @Field(() => String, { nullable: true })
  primaryContactPhone?: string;

  @Field(() => String, { nullable: true })
  repNumber?: string;

  @Field(() => String, { nullable: true })
  secondaryContactEmail?: string;

  @Field(() => String, { nullable: true })
  secondaryContactName?: string;

  @Field(() => String, { nullable: true })
  secondaryContactPhone?: string;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => String, { nullable: true })
  subDomain?: string;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => Boolean, { nullable: true })
  virtualAdvisor?: boolean;

  @Field(() => String, { nullable: true })
  zip?: string;
}

@InputType()
export class DeleteAdvisorDto {
  @Field(() => Int, { nullable: false })
  advisorId: number;
}

@InputType()
export class FindManyAdvisorDto {
  @Field(() => GraphQLDateTime, { nullable: true })
  activationDate?: Date;

  @Field(() => String, { nullable: true })
  address1?: string;

  @Field(() => String, { nullable: true })
  address2?: string;

  @Field(() => Int, { nullable: true })
  advisorId?: number;

  @Field(() => String, { nullable: true })
  advisorType?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  applicationDate?: Date;

  @Field(() => String, { nullable: true })
  businessDescription?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  clientSupportStrategy?: string;

  @Field(() => String, { nullable: true })
  companyEntityType?: string;

  @Field(() => String, { nullable: true })
  companyName?: string;

  @Field(() => String, { nullable: true })
  companySize?: string;

  @Field(() => String, { nullable: true })
  crdNumber?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  createdAt?: Date;

  @Field(() => String, { nullable: true })
  disclaimers?: string;

  @Field(() => String, { nullable: true })
  doingBusinessAs?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => Float, { nullable: true })
  fee?: number;

  @Field(() => Int, { nullable: true })
  firmId?: number;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  homeOfficeName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  logo?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  primaryContactEmail?: string;

  @Field(() => String, { nullable: true })
  primaryContactName?: string;

  @Field(() => String, { nullable: true })
  primaryContactPhone?: string;

  @Field(() => String, { nullable: true })
  repNumber?: string;

  @Field(() => String, { nullable: true })
  secondaryContactEmail?: string;

  @Field(() => String, { nullable: true })
  secondaryContactName?: string;

  @Field(() => String, { nullable: true })
  secondaryContactPhone?: string;

  @Field(() => String, { nullable: true })
  state?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => String, { nullable: true })
  subDomain?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  updatedAt?: Date;

  @Field(() => Boolean, { nullable: true })
  virtualAdvisor?: boolean;

  @Field(() => String, { nullable: true })
  zip?: string;
}

@InputType()
export class FindUniqueAdvisorDto {
  @Field(() => Int, { nullable: false })
  advisorId: number;
}

@InputType()
export class UpdateDataAdvisorDto {
  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  companyName?: string;

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
  password?: string;

  @Field(() => GraphQLDateTime, { nullable: true })
  applicationDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: true })
  activationDate?: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  createdAt: Date;

  @Field(() => GraphQLDateTime, { nullable: false })
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  advisorType?: string;

  @Field(() => Int, { nullable: true })
  firmId?: number;

  @Field(() => String, { nullable: true })
  homeOfficeName?: string;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  subDomain?: string;

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

  @Field(() => String, { nullable: true })
  companyEntityType?: string;

  @Field(() => String, { nullable: true })
  primaryContactPhone?: string;

  @Field(() => String, { nullable: true })
  primaryContactEmail?: string;

  @Field(() => String, { nullable: true })
  secondaryContactName?: string;

  @Field(() => String, { nullable: true })
  secondaryContactPhone?: string;

  @Field(() => String, { nullable: true })
  secondaryContactEmail?: string;

  @Field(() => Boolean, { nullable: true })
  virtualAdvisor?: boolean;

  @Field(() => String, { nullable: true })
  companySize?: string;

  @Field(() => String, { nullable: true })
  primaryContactName?: string;

  @Field(() => String, { nullable: true })
  repNumber?: string;

  @Field(() => String, { nullable: true })
  crdNumber?: string;

  @Field(() => String, { nullable: true })
  status?: string;

  @Field(() => String, { nullable: true })
  doingBusinessAs?: string;
}

@InputType()
export class UpdateWhereAdvisorDto {
  @Field(() => Int, { nullable: false })
  advisorId: number;
}
