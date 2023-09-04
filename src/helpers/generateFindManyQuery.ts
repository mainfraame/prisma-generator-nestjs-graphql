import { DMMF } from '@prisma/generator-helper';

import { camelCase, startCase } from '../utils';
import { getFindManyFields } from './getFindManyFields';

export function generateFindManyQuery(model: DMMF.Model) {
  return getFindManyFields(model).length > 0
    ? `
    @Query(() => [${model.name}])
    async findMany${startCase(model.name)}${
      model.name.endsWith('s') ? '' : 's'
    }(
      @Context() ctx: { prisma: PrismaClient },
      @Args() {skip, take, orderBy, ...where}: FindMany${startCase(
        model.name
      )}Arg
    ) {
        return ctx.prisma.${camelCase(model.name)}.findMany({
          orderBy: orderBy as unknown as Prisma.${startCase(
            model.name
          )}FindManyArgs['orderBy'],
          skip: skip ?? 0, 
          take: take ?? 100,
          where: where as unknown as Prisma.${startCase(
            model.name
          )}FindManyArgs['where']
        });
    }
  `
    : '';
}
