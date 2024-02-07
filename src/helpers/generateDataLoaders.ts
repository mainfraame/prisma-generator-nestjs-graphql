import type { DMMF } from '@prisma/generator-helper';

import { Settings } from '../types';
import { camelCase, fieldTsTypes, startCase, writeFile } from '../utils';

export async function generateDataLoaders(
  settings: Settings,
  loaders: [string, string, string[]][]
) {
  await writeFile(
    `${settings.defaultOutput}/prisma/dataLoader.service.ts`,
    `
    import { Injectable } from '@nestjs/common';
    import { ${loaders.map(loader => loader[2][1].replace('[]', '')).join(', ')} } from '@prisma/client';
    import DataLoader from 'dataloader';

    import { PrismaService } from './prisma.service';
    
    @Injectable()
    export class DataLoaderService {
      constructor(private prisma: PrismaService){}
    
      create() {
        return {
          ${loaders.map(l => l[1]).join(',')}
        };
      }
    }
  `
  );
}

export function generateDataLoader(
  parent: DMMF.Model,
  keys: {
    primaryKey?: DMMF.Field;
    uniqueKey?: DMMF.Field;
  },
  field: DMMF.Field,
  target: DMMF.Model
) {
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

  if ((!toKey && !fromKey) || !targetHasField || !parentHasField) {
    return '';
  }

  const hasCompositeKey =
    target.primaryKey?.name === null && !!target.primaryKey?.fields?.length;

  const isCompositeAndFindUnique =
    hasCompositeKey &&
    parent.fields.every(field =>
      target.primaryKey?.fields.find(f => f === field.name)
    );

  const isCompositeAndFindFirst =
    hasCompositeKey &&
    !parent.fields.every(field =>
      target.primaryKey?.fields.find(f => f === field.name)
    );

  const findFirstField = isCompositeAndFindFirst
    ? parent.fields.filter(field =>
        target.primaryKey?.fields.find(f => f === field.name)
      )?.[0]?.name
    : undefined;

  const whereKey = isCompositeAndFindUnique
    ? target.primaryKey?.fields.join('_')
    : isCompositeAndFindFirst
      ? findFirstField ?? toKey
      : toKey;

  const keyType =
    !field.isList && isCompositeAndFindUnique
      ? `{${target.primaryKey.fields
          .map(
            field =>
              `${field}: ${parent.fields.find(f => f.name === field).type}`
          )
          .join(',')}}`
      : isCompositeAndFindFirst
        ? fieldTsTypes[
            `${parent.fields.find(f => f.name === (findFirstField ?? fromKey)).type}`
          ]
        : fieldTsTypes[`${parent.fields.find(f => f.name === fromKey).type}`];

  const returnType = `${startCase(field.type)}${field.isList ? '[]' : ''}`;
  const name = `${camelCase(parent.name)}${startCase(field.name)}`;

  return [
    name,
    `${name}: new DataLoader<${keyType}, ${returnType}>(async (ids: any[]) => {
        const parsedIds = ids.map((id) => JSON.parse(id));
    
        const rows = await this.prisma.${camelCase(field.type)}.findMany({
          where: {
            ${whereKey}: {
               in: parsedIds
            }
          }
        }).catch(() => []);
        
        const map = {};

        /** use for-loop for performance */
        for (let i = 0; i < rows.length; i++) {
            const rowId = ${whereKey
              .split('_')
              .map(key => `rows[i]['${key}']`)
              .join('_')}
           map[rowId] = ${field.isList ? '[...map[rowId] ?? [], rows[i]]' : 'rows[i]'};
        }

        return ids.map((id) => ${field.isList ? 'map[id] ?? []' : 'map[id] ?? null'});
    })
  `,
    [keyType, returnType]
  ];
}
