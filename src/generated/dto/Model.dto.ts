import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Model {
  @Field(() => Int)
  modelId: number

  @Field(() => String)
  modelName: string

  @Field(() => Int)
  riskLevel: number

  @Field(() => Boolean)
  autoRebalance: Date

  @Field(() => Int)
  rebalanceFreq: number

  @Field()
  fees: string

  @Field(() => Int)
  drift: number

  @Field(() => Date)
  createdAt?: Date

  @Field(() => Int)
  createdById: number

  @Field(() => String)
  status: string

  @Field(() => String)
  updatedBy?: string

  @Field(() => Int)
  benchmarkId: number

  @Field(() => String)
  viewName: string

  @Field(() => Int)
  programId: number

  @Field(() => String)
  programType?: string

  @Field(() => Boolean)
  defaultInvest?: Date

  @Field(() => Int)
  yearsToRetireLow?: number

  @Field(() => Int)
  yearsToRetireHigh?: number

  @Field(() => Int)
  riskValue1Low?: number

  @Field(() => Int)
  riskValue1High?: number

  @Field(() => String)
  programName?: string

  @Field(() => String)
  factsheet?: string

  @Field(() => String)
  modelType: string

  @Field(() => String)
  description?: string

  @Field(() => Int)
  securityProviderId: number

  @Field(() => String)
  benchmarkName?: string

  @Field(() => String)
  benchmarkDescription?: string

  @Field(() => Date)
  inceptionDate?: Date

  @Field()
  advisor: string

  @Field()
  program: string
}
