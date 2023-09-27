import { Settings } from '../types';
import { writeFile } from '../utils';

export async function generateScalars(settings: Settings) {
  await writeFile(
    `${settings.defaultOutput}/scalar/DateFilterScalar.ts`,
    `
      import { Scalar, CustomScalar } from '@nestjs/graphql';
      import { Kind, ValueNode } from 'graphql';

      import { DateFilterArg } from '../arg/DateFilterArg';

      @Scalar('DateFilterScalar')
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
                  ? ((field.value as any).values ?? []).map(({ value }) => new Date(value))
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
    }`
  );

  await writeFile(
    `${settings.defaultOutput}/scalar/IntFilterScalar.ts`,
    `
      import { Scalar, CustomScalar } from '@nestjs/graphql';
      import { Kind, ValueNode } from 'graphql';

      import { IntFilterArg } from '../arg/IntFilterArg';

      @Scalar('IntFilterScalar')
      export class IntFilterScalar implements CustomScalar<number, IntFilterArg> {
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
                  [field.name.value]: ['gt', 'gte', 'lt', 'lte', 'not'].includes(field.name.value)
                    ? parseFloat((field.value as any).value)
                    : ((field.value as any).values ?? []).map(({ value }) => parseFloat(value))
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
    }`
  );

  await writeFile(
    `${settings.defaultOutput}/scalar/StringFilterScalar.ts`,
    `
    import { CustomScalar, Scalar } from '@nestjs/graphql';
    
    import { Kind, ValueNode } from 'graphql';
    
    import { StringFilterArg } from '../arg/StringFilterArg';

    @Scalar('StringFilterScalar')
    export class StringFilterScalar implements CustomScalar<string, StringFilterArg> {
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
                  ? ((field.value as any).values ?? [])
                  : ['not'].includes(field.name.value)
                    ? (field.value as any).value
                    : ['contains', 'endsWith', 'notContains', 'startsWith'].includes(field.name.value)
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
  
        throw new Error('Invalid input for StringFilterScalar');
      }
       
      serialize(value) {
        return value;
      }
    }`
  );
}
