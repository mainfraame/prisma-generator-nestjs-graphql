import { writeFileSafely } from '../utils/writeFileSafely';
import { generateCreateFields } from './generateCreateFields';
import { generateDeleteWhereFields } from './generateDeleteWhereFields';
import { generateFindManyFields } from './generateFindManyFields';
import { generateFindUniqueFields } from './generateFindUniqueFields';
import { generateUpdateDataFields } from './generateUpdateDataFields';
import { generateUpdateWhereFields } from './generateUpdateWhereFields';
import { startCase } from 'lodash';

export async function generateDtos(dmmf, outputPath) {
  // Generate DTO files for each model
  for (const model of dmmf.datamodel.models) {
    const createFields = generateCreateFields(model.fields);
    const findManyFields = generateFindManyFields(model.fields);
    const findUniqueFields = generateFindUniqueFields(model.fields, model);
    const updateDataFields = generateUpdateDataFields(model.fields, model);
    const deleteWhereFields = generateDeleteWhereFields(model.fields, model);
    const updateWhereFields = generateUpdateWhereFields(model.fields, model);

    const content = `
      import { InputType, Field, Int, Float } from '@nestjs/graphql';
      import { GraphQLBigInt, GraphQLDateTime, GraphQLJSONObject } from 'graphql-scalars';
      
      @InputType()
      export class Create${startCase(model.name)}Dto {
        ${createFields}
      }

      @InputType()
      export class Delete${startCase(model.name)}Dto {
        ${deleteWhereFields}
      }
      
      @InputType()
      export class FindMany${startCase(model.name)}Dto {
        ${findManyFields}
      }
      
      @InputType()
      export class FindUnique${startCase(model.name)}Dto {
        ${findUniqueFields}
      }
      
      @InputType()
      export class UpdateData${startCase(model.name)}Dto {
        ${updateDataFields}
      }
      
      @InputType()
      export class UpdateWhere${startCase(model.name)}Dto {
        ${updateWhereFields}
      }
      `;

    await writeFileSafely(`${outputPath}/dto/${model.name}.dto.ts`, content);
  }
}
