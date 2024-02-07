import { Field, InputType, Int } from '@nestjs/graphql';

import { IntFilterScalar } from '../scalar/IntFilterScalar';
import { StringFilterScalar } from '../scalar/StringFilterScalar';

@InputType()
export class CreateEmployeeDto {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  position: string;
}

@InputType()
export class DeleteEmployeeDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class DeleteManyEmployeeDto {
  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  name?: string | StringFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  position?: string | StringFilterScalar;
}

@InputType()
export class FindManyEmployeeDto {
  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  name?: string | StringFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  position?: string | StringFilterScalar;
}

@InputType()
export class FindUniqueEmployeeDto {
  @Field(() => Int, { nullable: false })
  id: number;
}

@InputType()
export class UpdateDataEmployeeDto {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  position: string;
}

@InputType()
export class UpdateManyWhereEmployeeDto {
  @Field(() => IntFilterScalar, { nullable: true })
  id?: number | IntFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  name?: string | StringFilterScalar;

  @Field(() => StringFilterScalar, { nullable: true })
  position?: string | StringFilterScalar;
}

@InputType()
export class UpdateWhereEmployeeDto {
  @Field(() => Int, { nullable: false })
  id: number;
}
