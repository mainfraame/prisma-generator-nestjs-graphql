import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Boolean, { nullable: false })
  completed: boolean;

  @Field(() => Date, { nullable: false })
  createdAt: Date;

  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => Date, { nullable: false })
  updatedAt: Date;

  @Field(() => Int, { nullable: false })
  userId: number;
}
