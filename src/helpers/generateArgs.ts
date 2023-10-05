import type { DMMF } from '@prisma/generator-helper';

import type { Settings } from '../types';
import { startCase, writeFile } from '../utils';
import { generateCreateFields } from './generateCreateFields';
import { generateDeleteWhereFields } from './generateDeleteWhereFields';
import { generateDependencies } from './generateDependencies';
import { generateEnumDependencies } from './generateEnumDependencies';
import { generateFindManyFields } from './generateFindManyFields';
import { generateFindUniqueFields } from './generateFindUniqueFields';
import { generateUpdateDataFields } from './generateUpdateDataFields';
import { generateUpdateWhereFields } from './generateUpdateWhereFields';

/**
 * generates @ArgsType which are used for @Args parameters
 */
export async function generateArgs(
  models: DMMF.Model[],
  enums: Record<string, DMMF.DatamodelEnum>,
  settings: Settings
) {
  await writeFile(
    `${settings.defaultOutput}/arg/DateFilterArg.ts`,
    `
      import { ArgsType, Field } from '@nestjs/graphql';
      
      @ArgsType()
      export class DateFilterArg {
        @Field(() => [Date], { nullable: 'itemsAndList' })
        in?: Date[];
      
        @Field({ nullable: true })
        lt?: Date;
      
        @Field({ nullable: true })
        lte?: Date;
      
        @Field({ nullable: true })
        gt?: Date;
      
        @Field({ nullable: true })
        gte?: Date;
      
        @Field({ nullable: true })
        not?: Date;
        
        @Field(() => [Date], { nullable: 'itemsAndList' })
        notIn?: Date[];
      }`
  );

  await writeFile(
    `${settings.defaultOutput}/arg/IntFilterArg.ts`,
    `
      import { ArgsType, Field, Int } from '@nestjs/graphql';
      
      @ArgsType()
      export class IntFilterArg {
        @Field(() => [Int], { nullable: 'itemsAndList' })
        in?: number[];
      
        @Field(() => [Int], { nullable: 'itemsAndList' })
        notIn?: number[];
      
        @Field({ nullable: true })
        lt?: number;
      
        @Field({ nullable: true })
        lte?: number;
      
        @Field({ nullable: true })
        gt?: number;
      
        @Field({ nullable: true })
        gte?: number;
      
        @Field({ nullable: true })
        not?: number;
      }`
  );

  await writeFile(
    `${settings.defaultOutput}/arg/StringFilterArg.ts`,
    `
    import { ArgsType, Field } from '@nestjs/graphql';

    @ArgsType()
    export class StringFilterArg {
      @Field(() => String, { nullable: false })
      contains?: string;
      
      @Field(() => [String], { nullable: false })
      in?: string[];
            
      @Field(() => String, { nullable: false })
      endsWith?: string;
                              
      @Field(() => String, { nullable: false })
      not?: string;
      
      @Field(() => [String], { nullable: false })
      notIn?: string[];
      
      @Field(() => String, { nullable: false })
      startsWith?: string;
    }`
  );

  for (const model of models) {
    const createFields = generateCreateFields(model, enums);
    const findManyFields = generateFindManyFields(model, enums);
    const findUniqueFields = generateFindUniqueFields(model, enums);
    const updateDataFields = generateUpdateDataFields(model, enums);
    const deleteWhereFields = generateDeleteWhereFields(model, enums);
    const updateWhereFields = generateUpdateWhereFields(model, enums);

    const content = `
      ${
        createFields.length > 0
          ? `@ArgsType()
             export class Create${startCase(model.name)}Arg {
               ${createFields}
             }`
          : ''
      }

      ${
        deleteWhereFields.length > 0
          ? `@ArgsType()
             export class Delete${startCase(model.name)}Arg {
               ${deleteWhereFields}
             }`
          : ''
      }
         
     ${
       findManyFields.length > 0
         ? ` 
             @ArgsType()
             export class DeleteMany${startCase(model.name)}Arg {
                ${findManyFields}
             }`
         : ''
     }
     
    ${
      findManyFields.length > 0
        ? ` 
             @ArgsType()
             export class FindMany${startCase(model.name)}Arg {
                ${findManyFields}
               
                @Field(() => ${model.name}GroupByScalar, { nullable: true }) 
                by?: Prisma.${startCase(model.name)}FindManyArgs['groupBy'];
               
                @Field(() => ${model.name}OrderByScalar, { nullable: true }) 
                orderBy?: Prisma.${startCase(
                  model.name
                )}FindManyArgs['orderBy'];
                
                @Field(() => Int, { nullable: true })
                skip?: number;
                 
                @Field(() => Int, { nullable: true })
                take?: number;
             }`
        : ''
    }
     
     ${
       findManyFields.length > 0
         ? `@ArgsType()
             export class FindFirst${startCase(model.name)}Arg {
               ${findManyFields}
             }`
         : ''
     }
          
     ${
       findUniqueFields.length > 0
         ? `@ArgsType()
             export class FindUnique${startCase(model.name)}Arg {
               ${findUniqueFields}
             }`
         : ''
     }
      
     ${
       updateDataFields.length > 0
         ? `@ArgsType()
             export class UpdateData${startCase(model.name)}Arg {
               ${updateDataFields}
             }`
         : ''
     }
      
     ${
       updateWhereFields.length > 0
         ? `@ArgsType()
             export class UpdateWhere${startCase(model.name)}Arg {
               ${updateWhereFields}
             }`
         : ''
     }
      `;

    await writeFile(
      `${settings.defaultOutput}/arg/${model.name}Arg.ts`,
      `
      ${generateDependencies(content)}
      ${generateEnumDependencies(content, enums)}

      import { ${model.name}GroupByScalar } from '../scalar/${
        model.name
      }GroupByScalar';
      import { ${model.name}OrderByScalar } from '../scalar/${
        model.name
      }OrderByScalar';

      ${content}
    `
    );
  }
}
