import { DMMF } from '@prisma/generator-helper';

export const genEnum = (enums: DMMF.DatamodelEnum) => {
  const enumValues = enums.values
    .map(({ name }) => `${name}="${name}"`)
    .join(',\n');

  return `export enum ${enums.name} { \n${enumValues}\n };`;
};
