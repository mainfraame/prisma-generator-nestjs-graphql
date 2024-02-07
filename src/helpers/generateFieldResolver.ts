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

  const hasCompositeKey =
    target.primaryKey?.name === null && !!target.primaryKey?.fields?.length;

  const isCompositeAndFindUnique =
    hasCompositeKey &&
    parent.fields.every(field =>
      target.primaryKey?.fields?.find(f => f === field.name)
    );

  const isCompositeAndFindFirst =
    hasCompositeKey &&
    !parent.fields.every(field =>
      target.primaryKey?.fields?.find(f => f === field.name)
    );

  const findFirstField = isCompositeAndFindFirst
    ? parent.fields.filter(field =>
        target.primaryKey?.fields?.find(f => f === field.name)
      )?.[0]?.name
    : undefined;

  /**
   * calculate relationship fields
   */
  const id = isCompositeAndFindUnique
    ? `{${target.primaryKey.fields
        .map(field => `${field}: parent.${field}`)
        .join(',')}}`
    : isCompositeAndFindFirst
      ? `parent.${findFirstField ?? fromKey}`
      : `parent.${fromKey}`;

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
      @Context() ctx: GraphQlContext,
      @Parent() parent: ${startCase(parent.name)}
    ) {
      return ctx.loaders.${camelCase(parent.name)}${startCase(field.name)}.load(${id});
    }
  `;
};
