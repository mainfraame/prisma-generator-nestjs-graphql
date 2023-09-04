import { DMMF } from '@prisma/generator-helper';

export function generateEnumDependencies(
  content: string,
  enums: Record<string, DMMF.DatamodelEnum>
) {
  return Object.keys(enums)
    .filter(e => content.includes(enums[e].name))
    .map(
      e => `import { ${enums[e].name} } from '../enum/${enums[e].name}.enum';`
    )
    .join('\n');
}
