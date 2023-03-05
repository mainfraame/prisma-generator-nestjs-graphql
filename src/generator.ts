import {
  GeneratorConfig,
  generatorHandler,
  GeneratorOptions
} from '@prisma/generator-helper';
import { logger } from '@prisma/internals';

import fs from 'fs/promises';
import path from 'path';

import { GENERATOR_NAME } from './constants';
import { generateDtos } from './helpers/generateDtos';
import { generateEntities } from './helpers/generateEntities';
import { generateResolvers } from './helpers/generateResolvers';
import { writeFileSafely } from './utils/writeFileSafely';

const { version } = require('../package.json');

type Settings = Partial<
  GeneratorConfig & {
  prettyName?: string;
  defaultOutput?: string;
  version?: string;
}
>;

let settings: Settings = {
  defaultOutput: ''
};

generatorHandler({
  onGenerate: async (options: GeneratorOptions) => {
    await fs.mkdir(settings.defaultOutput, { recursive: true });

    await generateEntities(options.dmmf, settings.defaultOutput);
    logger.info(`${GENERATOR_NAME}::entities:created`);

    await generateDtos(options.dmmf, settings.defaultOutput);
    logger.info(`${GENERATOR_NAME}::dtos:created`);

    await generateResolvers(options.dmmf, settings);

    const imports = options.dmmf.datamodel.models
      .map(
        (model) =>
          `import { ${model.name}Resolver } from './resolvers/${model.name}.resolver';`
      )
      .join('\n');

    const allExports = options.dmmf.datamodel.models
      .map(
        (model) =>
          `
          export * from './dto/${model.name}.dto';
          export * from './entities/${model.name}.entity';
          `
      )
      .join('\n');

    const exports = options.dmmf.datamodel.models
      .map((model) => `${model.name}Resolver`)
      .join(',\n');

    await writeFileSafely(
      `${settings.defaultOutput}/index.ts`,
      `
          ${imports}
          
          ${allExports}
          
          export const resolvers = [
            ${exports}
          ];
       `
    );

    if (settings.defaultOutput.includes('node_modules')) {
      await fs.writeFile(
        `${settings.defaultOutput}/package.json`,
        JSON.stringify(
          {
            name: '@generated/graphql',
            description: 'auto generated nestjs graphql classes',
            version: '1.0.0',
            main: 'index.cjs',
            module: 'index.js',
            types: 'index.ts',
            license: 'MIT',
            engines: {
              node: '>=16.0'
            },
            dependencies: {
              '@nestjs/graphql': '*',
              '@prisma/client': '*',
              graphql: '*',
              'graphql-scalars': '*'
            }
          },
          null,
          2
        )
      );
    }

    logger.info(`${GENERATOR_NAME}::resolvers:created`);
  },
  onManifest(config: Settings) {
    logger.info(`${GENERATOR_NAME}::registered`);

    settings = {
      ...config,
      defaultOutput: path.join(
        process.cwd(),
        config.defaultOutput ?? 'node_modules/@generated/graphql'
      ),
      prettyName: GENERATOR_NAME,
      version
    };

    return settings;
  }
});
