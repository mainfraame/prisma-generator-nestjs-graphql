import { CustomScalar, Scalar } from '@nestjs/graphql';

import { ValueNode } from 'graphql';

@Scalar('UserGroupByScalar')
export class UserGroupByScalar
  implements CustomScalar<string | string[], string | string[]>
{
  parseValue(value: string | string[]): string | string[] {
    return value;
  }

  serialize(value: string | string[]): string | string[] {
    return value;
  }

  parseLiteral(ast: ValueNode): string | string[] {
    if (ast.kind !== 'StringValue' && ast.kind !== 'ListValue') {
      throw new Error(
        'Can only validate string or list values. Received: ' + ast.kind
      );
    }

    if (ast.kind === 'ListValue') {
      return ast.values.map(value => {
        if (value.kind !== 'StringValue') {
          throw new Error(
            'Invalid value for groupBy. Expected string. Received: ' +
              value.kind
          );
        }
        return value.value;
      });
    }

    return ast.value;
  }
}
