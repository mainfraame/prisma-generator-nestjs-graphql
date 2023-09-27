import type { DMMF } from '@prisma/generator-helper';

import type { Settings } from '../types';
import { writeFile } from '../utils';

export async function generateEnums(
  enums: DMMF.DatamodelEnum[],
  settings: Settings
) {
  for (const e of enums) {
    const values = Array.from(e.values)
      .map(({ name }) => `${name}="${name}"`)
      .join(',\n');

    await writeFile(
      `${settings.defaultOutput}/enum/${e.name}Enum.ts`,
      `
        export enum ${e.name} {
          ${values} 
        };
      `
    );
  }
}
