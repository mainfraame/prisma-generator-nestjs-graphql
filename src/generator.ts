import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper';

import fs from 'fs/promises';
import path from 'path';
import { performance } from 'perf_hooks';

import { VERSION } from './constants';
import { generateArgs } from './helpers/generateArgs';
import { generateDtos } from './helpers/generateDtos';
import { generateEntities } from './helpers/generateEntities';
import { generateEnums } from './helpers/generateEnums';
import { generateOrderByScalar } from './helpers/generateOrderByScalar';
import { generatePrismaModule } from './helpers/generatePrismaModule';
import { generateResolvers } from './helpers/generateResolvers';
import { generateScalars } from './helpers/generateScalars';
import type { Settings } from './types';
import { log, writeFile } from './utils';

let settings: Settings = {
  defaultOutput: '',
  excludes: [],
  includeMutations: false
};

generatorHandler({
  onGenerate: async (options: GeneratorOptions) => {
    try {
      if (await fs.stat(settings.defaultOutput).catch(() => false)) {
        await fs.rm(settings.defaultOutput, { recursive: true });
      }

      const models = options.dmmf.datamodel.models.filter(
        m => !settings.excludes.includes(m.name)
      );

      const enums = options.dmmf.datamodel.enums ?? [];

      await fs.mkdir(settings.defaultOutput, { recursive: true });

      const enumsHash = enums.reduce((acc, e) => ({ ...acc, [e.name]: e }), {});

      await generateScalars(settings);
      await generatePrismaModule(settings);
      await generateEnums(enums, settings);
      await generateArgs(models, enumsHash, settings);
      await generateEntities(models, enumsHash, settings);
      await generateDtos(models, enumsHash, settings);
      await generateResolvers(models, settings);
      await generateOrderByScalar(models, settings);

      await writeFile(
        `${settings.defaultOutput}/index.ts`,
        `
          import { DateFilterScalar } from './scalar/DateFilterScalar';
          import { IntFilterScalar } from './scalar/IntFilterScalar';
          import { StringFilterScalar } from './scalar/StringFilterScalar';
          ${models
            .map(
              model =>
                `import { ${model.name}Resolver } from './resolvers/${model.name}Resolver';`
            )
            .join('\n')}
          
          ${models
            .map(
              model =>
                `import { ${model.name}OrderByScalar } from './scalar/${model.name}OrderByScalar';`
            )
            .join('\n')}
          
          ${models
            .map(
              model => `
              export * from './arg/${model.name}Arg';
              export * from './dto/${model.name}Dto';
              export * from './entities/${model.name}Entity';
              export * from './scalar/${model.name}OrderByScalar';
              `
            )
            .join('\n')}
          
          ${enums
            .map(e => `export { ${e.name} } from './enum/${e.name}Enum';`)
            .join('\n')}
          
          export const prismaProviders = [
            ${models
              .reduce(
                (acc, model) => [
                  ...acc,
                  `${model.name}OrderByScalar`,
                  `${model.name}Resolver`
                ],
                ['DateFilterScalar', 'IntFilterScalar', 'StringFilterScalar']
              )
              .sort()
              .join(',\n')}
          ];
          
          export { PrismaModule } from './prisma/prisma.module';
          export { PrismaService } from './prisma/prisma.service';
       `
      );

      if (settings.defaultOutput.includes('node_modules')) {
        await fs.writeFile(
          `${settings.defaultOutput}/package.json`,
          JSON.stringify(
            {
              description: 'auto generated nestjs graphql classes',
              exports: {
                '.': {
                  import: './dist/esm/index.js',
                  types: './src/index.ts',
                  default: './dist/cjs/index.js'
                },
                './package.json': './package.json'
              },
              files: ['dist', 'src'],
              license: 'MIT',
              main: './dist/cjs/index.js',
              module: './dist/esm/index.js',
              name: '@generated/graphql',
              peerDependencies: {
                '@nestjs/common': '*',
                '@nestjs/core': '*',
                '@nestjs/graphql': '*',
                '@prisma/client': '*',
                graphql: '*',
                'graphql-scalars': '*'
              },
              sideEffects: false,
              types: './src/index.ts',
              version: VERSION
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
        config.output?.value ??
          config.defaultOutput ??
          'node_modules/@generated/graphql'
      ),
      includeMutations: config?.config?.includeMutations === 'true',
      excludes: (config.config.excludes ?? []) as string[],
      startTime: performance.now(),
      version: VERSION
    };

    return settings;
  }
});
