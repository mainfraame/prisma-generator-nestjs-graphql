import { DMMF } from '@prisma/generator-helper';

import type { Settings } from '../types';
import { writeFile } from '../utils';
import { getNonRelationFields } from './getNonRelationFields';

export async function generateOrderByScalar(
  models: DMMF.Model[],
  settings: Settings
) {
  // todo:: move this to centralized generator
  await writeFile(
    `${settings.defaultOutput}/scalar/IntOrFilter.scalar.ts`,
    `
      import { Scalar, CustomScalar } from '@nestjs/graphql';
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
              value[field.name.value] = 
                ['equals', 'gt', 'gte', 'lt', 'lte', 'not'].includes(field.name.value) 
                  ? parseFloat((field.value as any).value) 
                  : ['in', 'notIn'].includes(field.name.value)
                    ? (field.value as any).value.map((value)=>parseFloat(value)):
                    (field.value as any).value;
            });
            return value;
          }
      
          return null;
        }
      }`
  );

  for (const model of models) {
    const fields = getNonRelationFields(model);

    await writeFile(
      `${settings.defaultOutput}/scalar/${model.name}OrderBy.scalar.ts`,
      `
    import { Scalar, CustomScalar } from '@nestjs/graphql';
    import { ValueNode } from 'graphql';
    
    @Scalar('${model.name}OrderBy')
    export class ${
      model.name
    }OrderBy implements CustomScalar<Record<string, 'asc' | 'desc'>, Record<string, 'asc' | 'desc'>> {
      parseValue(value: Record<string, 'asc' | 'desc'>): Record<string, 'asc' | 'desc'> {
        return this.validate(value);
      }
    
      serialize(value: Record<string, 'asc' | 'desc'>): Record<string, 'asc' | 'desc'> {
        return this.validate(value);
      }
    
      parseLiteral(ast: ValueNode): Record<string, 'asc' | 'desc'> {
        if (ast.kind !== 'ObjectValue') {
          throw new Error('Can only validate object values. Received: '+ast.kind);
        }
    
        const value = {};
        
        ast.fields.forEach(field => {
          if (field.value.kind !== 'StringValue' || (field.value.value !== 'asc' && field.value.value !== 'desc')) {
            throw new Error('Invalid value for field '+field.name.value+'. Expected "asc" or "desc".');
          }
          value[field.name.value] = field.value.value;
        });
    
        return this.validate(value);
      }
    
      private validate(value) {
        const validKeys = [${fields
          .map(field => `'${field.name}'`)
          .join(', ')}];
        for (const key of Object.keys(value)) {
          if (!validKeys.includes(key)) {
            throw new Error('Invalid key for sort order: ' + key);
          }
          if (value[key] !== 'asc' && value[key] !== 'desc') {
            throw new Error('Invalid value for key '+key+'. Expected "asc" or "desc".');
          }
        }
        return value;
      }
    }
  `
    );
  }
}
