import { writeFileSafely } from '../utils/writeFileSafely';
import { generateEntityField } from './generateEntityField';

export async function generateEntities(dmmf, outputPath) {
  for (const model of dmmf.datamodel.models) {
    const fields = model.fields
      .filter((field) => !field.relationName)
      .map((field) => generateEntityField(field))
      .join('\n\n');

    const content = `
    import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
    import { GraphQLBigInt, GraphQLDateTime, GraphQLJSONObject } from 'graphql-scalars';
    
    @ObjectType()
    export class ${model.name} {
      ${fields}
    }`;

    await writeFileSafely(
      `${outputPath}/entities/${model.name}.entity.ts`,
      content
    );
  }
}
