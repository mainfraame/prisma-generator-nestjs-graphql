import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Payrollprovider {
  @Field(() => Int)
  payrollProviderId: number

  @Field(() => String)
  payrollProviderName: string
}
