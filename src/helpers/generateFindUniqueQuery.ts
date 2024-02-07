import { DMMF } from '@prisma/generator-helper';

import { Settings } from '../types';
import { camelCase, startCase } from '../utils';
import { getUniqueFields } from './getUniqueFields';

export function generateFindUniqueQuery(settings: Settings, model: DMMF.Model) {
  return getUniqueFields(model)?.length > 0
    ? `
    @Query(() => ${model.name}, { nullable: true })
    async findUnique${startCase(model.name)}(
      @Context() ctx: GraphQlContext,
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
