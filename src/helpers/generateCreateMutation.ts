import type { DMMF } from '@prisma/generator-helper';

import { Settings } from '../types';
import { camelCase, startCase } from '../utils';
import { getNonRelationFields } from './getNonRelationFields';

export function generateCreateMutation(settings: Settings, model: DMMF.Model) {
  return getNonRelationFields(model).length > 0
    ? `
    @Mutation(() => ${model.name})
    async create${startCase(model.name)}(
      @Context() ctx: GraphQlContext,
      @Args() data: Create${startCase(model.name)}Arg
    ) {
      return ctx.prisma.${camelCase(model.name)}.create({
        data: data as unknown as Prisma.${startCase(
          model.name
        )}CreateArgs['data']
      });
    }
  `
    : '';
}
