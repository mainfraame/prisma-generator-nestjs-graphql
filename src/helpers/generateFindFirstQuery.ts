import { DMMF } from '@prisma/generator-helper';

import { camelCase, startCase } from '../utils';
import { getFindManyFields } from './getFindManyFields';

export function generateFindFirstQuery(model: DMMF.Model) {
  return getFindManyFields(model).length > 0
    ? `
    @Query(() => ${model.name})
    async findFirst${startCase(model.name)}(
      @Context() ctx: { prisma: PrismaClient },
      @Args() where: FindFirst${startCase(model.name)}Arg
    ) {
        return ctx.prisma.${camelCase(model.name)}.findFirst({
          where: where as unknown as Prisma.${startCase(
            model.name
          )}FindFirstArgs['where']
        });
    }
  `
    : '';
}
