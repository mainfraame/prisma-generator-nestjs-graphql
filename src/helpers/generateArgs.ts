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
  // todo:: move this to centralized generator
  await writeFile(
    `${settings.defaultOutput}/arg/IntFilterInput.arg.ts`,
    `
      import { ArgsType, Field, Int } from '@nestjs/graphql';
      
      @ArgsType()
      export class IntFilterInput {
        @Field({ nullable: true })
        equals?: number;
      
        @Field(type => [Int], { nullable: 'itemsAndList' })
        in?: number[];
      
        @Field(type => [Int], { nullable: 'itemsAndList' })
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
             export class FindMany${startCase(model.name)}Arg {
                ${findManyFields}
               
                @Field(() => ${model.name}OrderBy, { nullable: true }) 
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
      `${settings.defaultOutput}/arg/${model.name}.arg.ts`,
      `
      ${generateDependencies(content)}
      ${generateEnumDependencies(content, enums)}

      import { ${model.name}OrderBy } from '../scalar/${
        model.name
      }OrderBy.scalar';

      ${content}
    `
    );
  }
}
