import { CustomScalar, Scalar } from '@nestjs/graphql';

import { Kind, ValueNode } from 'graphql';

import { IntFilterInput } from '../arg/IntFilterInput.arg';

@Scalar('IntOrFilter')
export class IntOrFilter implements CustomScalar<number, IntFilterInput> {
  description = 'Int Filter scalar type';

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10);
    }

    if (ast.kind === Kind.FLOAT) {
      return parseFloat(ast.value);
    }

    if (ast.kind === Kind.OBJECT) {
      return ast.fields.reduce((acc, field) => {
        return {
          ...acc,
          [field.name.value]: ['gt', 'gte', 'lt', 'lte', 'not'].includes(
            field.name.value
          )
            ? parseFloat((field.value as any).value)
            : ((field.value as any).values ?? []).map(({ value }) =>
                parseFloat(value)
              )
        };
      }, {});
    }

    return null;
  }

  parseValue(value) {
    if (typeof value === 'number' || typeof value === 'object') {
      return value;
    }

    throw new Error('Invalid input for IntFilterScalar');
  }

  serialize(value) {
    return value;
  }
}
