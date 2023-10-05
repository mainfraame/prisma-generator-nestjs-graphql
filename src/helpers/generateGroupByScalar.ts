import { DMMF } from '@prisma/generator-helper';

import type { Settings } from '../types';
import { writeFile } from '../utils';

export async function generateGroupByScalar(
  models: DMMF.Model[],
  settings: Settings
) {
  for (const model of models) {
    await writeFile(
      `${settings.defaultOutput}/scalar/${model.name}GroupByScalar.ts`,
      `
    import { Scalar, CustomScalar } from '@nestjs/graphql';
    import { ValueNode } from 'graphql';
    
    @Scalar('${model.name}GroupByScalar')
    export class ${model.name}GroupByScalar implements CustomScalar<string | string[], string | string[]> {
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
  `
    );
  }
}
