import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class StringFilterArg {
  @Field(() => String, { nullable: false })
  contains?: string;

  @Field(() => [String], { nullable: false })
  in?: string[];

  @Field(() => String, { nullable: false })
  endsWith?: string;

  @Field(() => String, { nullable: false })
  not?: string;

  @Field(() => [String], { nullable: false })
  notIn?: string[];

  @Field(() => String, { nullable: false })
  startsWith?: string;
}
