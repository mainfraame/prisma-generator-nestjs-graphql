import { DMMF } from '@prisma/generator-helper';

export function getUpdateDataFields(model: DMMF.Model) {
  return model.fields
    .filter(field => !field.relationName)
    .filter(field => !field.isId);
}
