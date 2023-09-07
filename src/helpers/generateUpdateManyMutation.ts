import type { DMMF } from '@prisma/generator-helper';

import { camelCase, startCase } from '../utils';
import { getUpdateDataFields } from './getUpdateDataFields';
import { getUpdateWhereFields } from './getUpdateWhereFields';

export function generateUpdateManyMutation(model: DMMF.Model) {
  const dataFields = getUpdateDataFields(model);
  const whereFields = getUpdateWhereFields(model);

  return dataFields.length > 0 && whereFields.length > 0
    ? `
    @Mutation(() => ${model.name})
    async updateMany${startCase(model.name)}(
      @Context() ctx: { prisma: PrismaClient },
      @Args('where', {type: () => UpdateWhere${startCase(
        model.name
      )}Dto }) where: UpdateWhere${startCase(model.name)}Dto,
      @Args('data', {type: () => [UpdateData${startCase(
        model.name
      )}Dto] }) data: Prisma.${startCase(model.name)}UpdateManyArgs['data']
    ) {
        return ctx.prisma.${camelCase(model.name)}.updateMany({
          data,
          // todo:: fix this typing
          where: where as unknown as Prisma.${startCase(
            model.name
          )}UpdateManyArgs['where']
        });
    }
  `
    : '';
}
