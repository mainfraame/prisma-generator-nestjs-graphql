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

export async function generateDtos(
  models: DMMF.Model[],
  enums: Record<string, DMMF.DatamodelEnum>,
  settings: Settings
) {
  // Generate DTO files for each model
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
          ? `@InputType()
             export class Create${startCase(model.name)}Dto {
               ${createFields}
             }`
          : ''
      }
      

      ${
        deleteWhereFields.length > 0
          ? `@InputType()
             export class Delete${startCase(model.name)}Dto {
               ${deleteWhereFields}
             }`
          : ''
      }
      
      ${
        findManyFields.length > 0
          ? `@InputType()
             export class FindMany${startCase(model.name)}Dto {
               ${findManyFields}
             }`
          : ''
      }
      
      ${
        findUniqueFields.length > 0
          ? `@InputType()
             export class FindUnique${startCase(model.name)}Dto {
               ${findUniqueFields}
             }`
          : ''
      }
      
      ${
        updateDataFields.length > 0
          ? `@InputType()
             export class UpdateData${startCase(model.name)}Dto {
               ${updateDataFields}
             }`
          : ''
      }
      
      ${
        updateWhereFields.length > 0
          ? `@InputType()
             export class UpdateWhere${startCase(model.name)}Dto {
              ${updateWhereFields}
            }`
          : ''
      }
      `;

    await writeFile(
      `${settings.defaultOutput}/dto/${model.name}.dto.ts`,
      `
      ${generateDependencies(content)}
      ${generateEnumDependencies(content, enums)}
      ${content}
    `
    );
  }
}
