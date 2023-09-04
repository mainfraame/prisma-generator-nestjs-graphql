import type { DMMF } from '@prisma/generator-helper';

import { camelCase, startCase } from '../utils';
import { getNonRelationFields } from './getNonRelationFields';

// todo:: fix generation of field types for Arg
export function generateCreateMutation(model: DMMF.Model) {
  return getNonRelationFields(model).length > 0
    ? `
    @Mutation(() => ${model.name})
    async create${startCase(model.name)}(
      @Context() ctx: { prisma: PrismaClient },
      @Args() data: Create${startCase(model.name)}Arg
    ) {
      return ctx.prisma.${camelCase(model.name)}.create({
        // todo:: fix the types in Create...Arg
        data: data as unknown as Prisma.${startCase(
          model.name
        )}CreateArgs['data']
      });
    }
  `
    : '';
}
