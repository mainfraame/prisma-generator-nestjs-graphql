import { DMMF } from '@prisma/generator-helper';

import { Settings } from '../types';
import { camelCase, startCase } from '../utils';
import { getFindManyFields } from './getFindManyFields';

export function generateFindManyQuery(settings: Settings, model: DMMF.Model) {
  return getFindManyFields(model).length > 0
    ? `
    @Query(() => [${model.name}])
    async findMany${startCase(model.name)}(
      @Context() ctx: GraphQlContext,
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
