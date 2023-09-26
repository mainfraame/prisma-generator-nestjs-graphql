import type { DMMF } from '@prisma/generator-helper';

import { camelCase, startCase } from '../utils';

export const generateFieldResolver = (
  parent: DMMF.Model,
  keys: { primaryKey?: DMMF.Field; uniqueKey?: DMMF.Field },
  field: DMMF.Field,
  target: DMMF.Model
) => {
  const toKey =
    field.relationToFields?.[0] ??
    target.fields.find(f => f.type === parent.name)?.relationFromFields?.[0] ??
    keys.primaryKey?.name ??
    keys.uniqueKey?.name;

  const fromKey =
    field.relationFromFields?.[0] ??
    target.fields.find(f => f.type === parent.name)?.relationToFields?.[0] ??
    keys.primaryKey?.name ??
    keys.uniqueKey?.name;

  const targetHasField = target.fields.some(f => f.name === toKey);
  const parentHasField = parent.fields.some(f => f.name === fromKey);

  /**
   * needed to prevent invalid look-ups both up / down chain
   */
  if ((!toKey && !fromKey) || !targetHasField || !parentHasField) {
    return '';
  }

  /**
   * calculate relationship fields; findUnique may have composite fields
   */
  const where =
    !field.isList &&
    target.primaryKey?.name === null &&
    target.primaryKey?.fields?.length
      ? `{ ${target.primaryKey?.fields.join('_')}: {${target.primaryKey.fields
          .map(field => `${field}: parent.${field}`)
          .join(',')}} }`
      : `{ ${toKey}: parent.${fromKey} }`;

  return `
    @ResolveField(() => 
    ${field.isList ? `[${startCase(field.type)}]` : startCase(field.type)},
    {nullable: ${
      !field.isList && field.isRequired
        ? 'false'
        : field.isList
        ? "'itemsAndList', defaultValue: []"
        : 'true'
    }
    })
    async ${camelCase(field.name)}(
      @Context() ctx: { prisma: PrismaClient },
      @Parent() parent: ${startCase(parent.name)}
    ) {
      return ctx.prisma.${camelCase(field.type)}.${
        field.isList ? 'findMany' : 'findUnique'
      }({
        where: ${where}
        /** ignore missing data (make nullable) for now */ 
      }).catch(() => ${field.isList ? '[]' : 'null'});
    }
  `;
};
