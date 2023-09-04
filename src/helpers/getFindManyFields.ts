import type { DMMF } from '@prisma/generator-helper';

import { orderBy } from 'lodash';

export function getFindManyFields(model: DMMF.Model) {
  return orderBy(
    model.fields.filter(field => !field.relationName),
    ['name']
  );
}
