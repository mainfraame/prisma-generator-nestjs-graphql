import { CustomScalar, Scalar } from '@nestjs/graphql';

import { ValueNode } from 'graphql';

@Scalar('TodoOrderByScalar')
export class TodoOrderByScalar
  implements
    CustomScalar<
      Record<string, 'asc' | 'desc'>,
      Record<string, 'asc' | 'desc'>
    >
{
  parseValue(
    value: Record<string, 'asc' | 'desc'>
  ): Record<string, 'asc' | 'desc'> {
    return this.validate(value);
  }

  serialize(
    value: Record<string, 'asc' | 'desc'>
  ): Record<string, 'asc' | 'desc'> {
    return this.validate(value);
  }

  parseLiteral(ast: ValueNode): Record<string, 'asc' | 'desc'> {
    if (ast.kind !== 'ObjectValue') {
      throw new Error('Can only validate object values. Received: ' + ast.kind);
    }

    const value = {};

    ast.fields.forEach(field => {
      if (
        field.value.kind !== 'StringValue' ||
        (field.value.value !== 'asc' && field.value.value !== 'desc')
      ) {
        throw new Error(
          'Invalid value for field ' +
            field.name.value +
            '. Expected "asc" or "desc".'
        );
      }
      value[field.name.value] = field.value.value;
    });

    return this.validate(value);
  }

  private validate(value) {
    const validKeys = [
      'completed',
      'createdAt',
      'id',
      'title',
      'updatedAt',
      'userId'
    ];
    for (const key of Object.keys(value)) {
      if (!validKeys.includes(key)) {
        throw new Error('Invalid key for sort order: ' + key);
      }
      if (value[key] !== 'asc' && value[key] !== 'desc') {
        throw new Error(
          'Invalid value for key ' + key + '. Expected "asc" or "desc".'
        );
      }
    }
    return value;
  }
}
