import {
  GeneratorConfig,
  generatorHandler,
  GeneratorOptions
} from '@prisma/generator-helper';

import fs from 'fs/promises';
import path from 'path';
import { performance } from 'perf_hooks';

import { VERSION } from './constants';
import { generateDtos } from './helpers/generateDtos';
import { generateEntities } from './helpers/generateEntities';
import { generateResolvers } from './helpers/generateResolvers';
import { log } from './utils/log';
import { writeFileSafely } from './utils/writeFileSafely';

const { version } = require('../package.json');

type Settings = Partial<
  GeneratorConfig & {
    defaultOutput?: string;
    startTime?: number;
    version?: string;
  }
>;

let settings: Settings = {
  defaultOutput: ''
};

generatorHandler({
  onGenerate: async (options: GeneratorOptions) => {
    try {
      if (await fs.stat(settings.defaultOutput).catch(() => false)) {
        await fs.rm(settings.defaultOutput, { recursive: true });
      }

      await fs.mkdir(settings.defaultOutput, { recursive: true });

      await generateEntities(options.dmmf, settings.defaultOutput);

      await generateDtos(options.dmmf, settings.defaultOutput);

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
              version: VERSION,
              main: './dist/index.cjs',
              module: './dist/index.js',
              types: './src/index.ts',
              exports: {
                '.': {
                  types: './src/index.ts',
                  import: './dist/index.js',
                  default: './dist/index.cjs'
                },
                './package.json': './package.json'
              },
              files: ['dist', 'src'],
              license: 'MIT',
              peerDependencies: {
                '@nestjs/graphql': '*',
                '@prisma/client': '*',
                graphql: '*',
                'graphql-scalars': '*'
              },
              sideEffects: false
            },
            null,
            2
          )
        );
      }

      log.success(
        'Generated NestJs GraphQl CRUD Classes',
        `to ${settings.defaultOutput.replace(process.cwd(), '')} in ${(
          performance.now() - settings.startTime
        ).toFixed(0)}ms`
      );
    } catch (e) {
      log.error('Failed To Generate NestJs GraphQl CRUD Classes', {
        message: e.message,
        stack: e.stack
      });

      process.exit(1);
    }
  },
  onManifest(config: Settings) {
    settings = {
      ...config,
      defaultOutput: path.join(
        process.cwd(),
        config.defaultOutput ?? 'node_modules/@generated/graphql'
      ),
      startTime: performance.now(),
      version
    };

    return settings;
  }
});
