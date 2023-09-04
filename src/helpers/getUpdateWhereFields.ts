import type { DMMF } from '@prisma/generator-helper';

import { orderBy } from 'lodash';

export function getUpdateWhereFields(model: DMMF.Model) {
  const parsedFields = orderBy(
    model.fields
      .filter(field => !field.relationName)
      .filter(field => field.isId),
    ['name']
  );

  return parsedFields.length
    ? parsedFields
    : orderBy(
        (model.primaryKey?.fields ?? []).map(field =>
          model.fields.find(({ name }) => name === field)
        ),
        ['name']
      );
}
