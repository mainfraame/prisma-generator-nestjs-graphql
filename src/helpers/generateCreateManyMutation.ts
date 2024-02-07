import type { DMMF } from '@prisma/generator-helper';

import { Settings } from '../types';
import { camelCase, startCase } from '../utils';
import { getNonRelationFields } from './getNonRelationFields';

// todo:: fix generation of field types for Arg
export function generateCreateManyMutation(
  settings: Settings,
  model: DMMF.Model
) {
  return getNonRelationFields(model).length > 0
    ? `
    @Mutation(() => ${model.name})
    async createMany${startCase(model.name)}(
      @Context() ctx: GraphQlContext,
      @Args({type: () => [Create${startCase(
        model.name
      )}Arg]}) data: Create${startCase(model.name)}Arg[]
    ) {
      return ctx.prisma.${camelCase(model.name)}.createMany({
        data: data as unknown as Prisma.${startCase(
          model.name
        )}CreateManyArgs['data']
      });
    }
  `
    : '';
}
