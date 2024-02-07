import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Employee {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  position: string;
}
