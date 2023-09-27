import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class IntFilterArg {
  @Field(() => [Int], { nullable: 'itemsAndList' })
  in?: number[];

  @Field(() => [Int], { nullable: 'itemsAndList' })
  notIn?: number[];

  @Field({ nullable: true })
  lt?: number;

  @Field({ nullable: true })
  lte?: number;

  @Field({ nullable: true })
  gt?: number;

  @Field({ nullable: true })
  gte?: number;

  @Field({ nullable: true })
  not?: number;
}
