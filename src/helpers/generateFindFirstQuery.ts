import { DMMF } from '@prisma/generator-helper';

import { Settings } from '../types';
import { camelCase, startCase } from '../utils';
import { getFindManyFields } from './getFindManyFields';

export function generateFindFirstQuery(settings: Settings, model: DMMF.Model) {
  return getFindManyFields(model).length > 0
    ? `
    @Query(() => ${model.name}, { nullable: true })
    async findFirst${startCase(model.name)}(
      @Context() ctx: GraphQlContext,
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
