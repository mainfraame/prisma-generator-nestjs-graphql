import type { DMMF } from '@prisma/generator-helper';

import { camelCase, startCase } from '../utils';
import { getFindManyFields } from './getFindManyFields';

export function generateDeleteManyMutation(model: DMMF.Model) {
  /** when no primary key exists, we can't include these. */
  return getFindManyFields(model).length > 0
    ? `
    @Mutation(() => ${model.name})
    async deleteMany${startCase(model.name)}(
      @Context() ctx: { prisma: PrismaClient },
      @Args() where: DeleteMany${startCase(
        model.name
      )}Arg,
    ) {
      return ctx.prisma.${camelCase(model.name)}.deleteMany({
        where: where as unknown as Prisma.${startCase(
          model.name
        )}DeleteManyArgs['where']
      });
    }
  `
    : '';
}
