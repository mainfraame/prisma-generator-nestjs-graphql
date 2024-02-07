import type { DMMF } from '@prisma/generator-helper';

import { Settings } from '../types';
import { camelCase, startCase } from '../utils';
import { getUpdateDataFields } from './getUpdateDataFields';
import { getUpdateWhereFields } from './getUpdateWhereFields';

export function generateUpdateMutation(settings: Settings, model: DMMF.Model) {
  return getUpdateDataFields(model).length > 0 &&
    getUpdateWhereFields(model).length > 0
    ? `
    @Mutation(() => ${model.name})
    async update${startCase(model.name)}(
      @Context() ctx: GraphQlContext,
      @Args('where', {type: () => UpdateWhere${startCase(
        model.name
      )}Dto }) where: UpdateWhere${startCase(model.name)}Dto, 
      @Args('data', {type: () => UpdateData${startCase(
        model.name
      )}Dto }) data: Prisma.${startCase(model.name)}UpdateArgs['data']
    ) {
        return ctx.prisma.${camelCase(model.name)}.update({
          data,
          where${
            model.primaryKey?.name === null && model.primaryKey?.fields?.length
              ? `: { ${model.primaryKey?.fields.join(
                  '_'
                )}: {${model.primaryKey.fields
                  .map(field => `${field}: where.${field}`)
                  .join(',')}} }`
              : ''
          }
        });
    }
  `
    : '';
}
