import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class StateProgram {
  @Field(() => Int)
  id: number

  @Field(() => Int)
  partnerSystemId: number

  @Field(() => Int)
  firmId: number

  @Field(() => String)
  employerCode: string

  @Field(() => String)
  employeeCode: string

  @Field(() => String)
  employeeFundCode: string

  @Field(() => String)
  feeTableCode: string

  @Field()
  regularCheckMailAddress?: Record<string, unknown>

  @Field()
  overnightCheckMailAddress?: Record<string, unknown>

  @Field()
  firm: string

  @Field()
  partnerSystem: string
}
