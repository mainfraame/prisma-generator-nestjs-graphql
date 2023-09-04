import type { DMMF } from '@prisma/generator-helper';

import { camelCase, startCase } from '../utils';
import { getUniqueFields } from './getUniqueFields';

export function generateDeleteMutation(model: DMMF.Model) {
  /** when no primary key exists, we can't include these. */
  return getUniqueFields(model).length > 0
    ? `
    @Mutation(() => ${model.name})
    async delete${startCase(model.name)}(
      @Context() ctx: { prisma: PrismaClient },
      @Args() where: Delete${startCase(model.name)}Arg,
    ) {
      return ctx.prisma.${camelCase(model.name)}.delete({
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
