import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Program {
  @Field(() => Int)
  programId: number

  @Field(() => String)
  type: string

  @Field(() => String)
  name?: string

  @Field(() => Date)
  createdAt: Date

  @Field(() => Int)
  programStatusId: number

  @Field(() => Int)
  programStrategyStatusId: number

  @Field()
  programSpecificData?: Record<string, unknown>

  @Field()
  updatedBy?: Record<string, unknown>

  @Field(() => Date)
  updatedAt?: Date

  @Field()
  advisorsponsorPlan: string

  @Field()
  model: string
}
