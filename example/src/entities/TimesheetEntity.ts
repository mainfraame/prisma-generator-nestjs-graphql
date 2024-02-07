import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Timesheet {
  @Field(() => Date, { nullable: false })
  date: Date;

  @Field(() => Int, { nullable: false })
  employeeId: number;

  @Field(() => Int, { nullable: false })
  hours: number;
}
