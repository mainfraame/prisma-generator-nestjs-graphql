import { CustomScalar, Scalar } from '@nestjs/graphql';

import { Kind, ValueNode } from 'graphql';

import { StringFilterArg } from '../arg/StringFilterArg';

@Scalar('StringFilter')
export class StringFilterScalar
  implements CustomScalar<string, StringFilterArg>
{
  description = 'String Filter scalar type';

  parseLiteral(ast: ValueNode) {
    if (ast.kind === Kind.STRING) {
      return ast.value;
    }

    if (ast.kind === Kind.OBJECT) {
      return ast.fields.reduce((acc, field) => {
        return {
          ...acc,
          [field.name.value]: ['in', 'notIn'].includes(field.name.value)
            ? ((field.value as any).values ?? []).map(({ value }) => value)
            : ['not'].includes(field.name.value)
              ? (field.value as any).value
              : ['contains', 'endsWith', 'notContains', 'startsWith'].includes(
                    field.name.value
                  )
                ? (field.value as any).value
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

    throw new Error('Invalid input for StringFilter');
  }

  serialize(value) {
    return value;
  }
}
