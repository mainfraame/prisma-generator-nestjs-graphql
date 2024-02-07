import { CustomScalar, Scalar } from '@nestjs/graphql';

import { Kind, ValueNode } from 'graphql';

import { DateFilterArg } from '../arg/DateFilterArg';

@Scalar('DateFilter')
export class DateFilterScalar implements CustomScalar<Date, DateFilterArg> {
  description = 'Date Filter scalar type';

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }

    if (ast.kind === Kind.OBJECT) {
      return ast.fields.reduce((acc, field) => {
        return {
          ...acc,
          [field.name.value]: ['in', 'notIn'].includes(field.name.value)
            ? ((field.value as any).values ?? []).map(
                ({ value }) => new Date(value)
              )
            : ['gt', 'gte', 'lt', 'lte', 'not'].includes(field.name.value)
              ? new Date((field.value as any).value)
              : undefined
        };
      }, {});
    }

    return null;
  }

  parseValue(value) {
    if (typeof value === 'string' || typeof value === 'object') {
      return value;
    }

    throw new Error('Invalid input for DateFilterScalar');
  }

  serialize(value) {
    return value;
  }
}
