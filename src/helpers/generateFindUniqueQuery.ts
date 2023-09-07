import { DMMF } from '@prisma/generator-helper';

import { camelCase, startCase } from '../utils';
import { getUniqueFields } from './getUniqueFields';

export function generateFindUniqueQuery(model: DMMF.Model) {
  return getUniqueFields(model)?.length > 0
    ? `
    @Query(() => ${model.name})
    async findUnique${startCase(model.name)}(
      @Context() ctx: { prisma: PrismaClient },
      @Args() where: FindUnique${startCase(model.name)}Arg
    ) {
        return ctx.prisma.${camelCase(model.name)}.findUnique({
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
