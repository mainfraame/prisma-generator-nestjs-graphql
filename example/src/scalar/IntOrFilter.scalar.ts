import { CustomScalar, Scalar } from '@nestjs/graphql';

import { Kind, ValueNode } from 'graphql';

import { IntFilterInput } from '../arg/IntFilterInput.arg';

@Scalar('IntOrFilter')
export class IntOrFilter implements CustomScalar<number, IntFilterInput> {
  description = 'Int Or Int Filter scalar type';

  parseValue(value) {
    if (typeof value === 'number' || typeof value === 'object') {
      return value;
    }
    throw new Error('Invalid input for NumberOrObject scalar');
  }

  serialize(value) {
    return value; // Return as-is
  }

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10);
    } else if (ast.kind === Kind.FLOAT) {
      return parseFloat(ast.value);
    } else if (ast.kind === Kind.OBJECT) {
      const value: any = {};
      ast.fields.forEach(field => {
        value[field.name.value] = [
          'equals',
          'gt',
          'gte',
          'lt',
          'lte',
          'not'
        ].includes(field.name.value)
          ? parseFloat((field.value as any).value)
          : ['in', 'notIn'].includes(field.name.value)
          ? (field.value as any).value.map(value => parseFloat(value))
          : (field.value as any).value;
      });
      return value;
    }

    return null;
  }
}
