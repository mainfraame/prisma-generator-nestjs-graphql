import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class DateFilterArg {
  @Field(() => [Date], { nullable: 'itemsAndList' })
  in?: Date[];

  @Field({ nullable: true })
  lt?: Date;

  @Field({ nullable: true })
  lte?: Date;

  @Field({ nullable: true })
  gt?: Date;

  @Field({ nullable: true })
  gte?: Date;

  @Field({ nullable: true })
  not?: Date;

  @Field(() => [Date], { nullable: 'itemsAndList' })
  notIn?: Date[];
}
