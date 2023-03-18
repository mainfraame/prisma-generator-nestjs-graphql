import { transform } from '@swc/core';

import fs from 'fs/promises';
import { basename, dirname } from 'path';

import { formatFile } from './formatFile';
import { log } from './log';

export const writeFileSafely = async (path: string, content: any) => {
  try {
    const isNodeModules = path.includes('node_modules');

    const fileName = basename(path);

    const outputPath =
      dirname(path).split('@generated/graphql')[0] + '@generated/graphql';

    const outputDir = dirname(path).split('@generated/graphql/')[1] ?? '';

    const srcDir = `${outputPath}${
      isNodeModules
        ? `/src${outputDir ? `/${outputDir}` : ''}`
        : outputDir ?? ''
    }`;

    const distDir = `${outputPath}/dist${outputDir ? `/${outputDir}` : ''}`;

    await fs.mkdir(distDir, { recursive: true });
    await fs.mkdir(srcDir, { recursive: true });

    const srcFile = `${srcDir}/${fileName}`;
    const cjsFile = `${distDir}/${fileName.replace(/\.ts$/, '.cjs')}`;
    const jsFile = `${distDir}/${fileName.replace(/\.ts$/, '.js')}`;

    /** write ts */
    await fs.writeFile(srcFile, await formatFile(content));

    if (isNodeModules) {
      /** write esm */
      await fs.writeFile(
        jsFile,
        (
          await transform(await formatFile(content), {
            jsc: {
              target: 'es2020',
              parser: {
                syntax: 'typescript',
                decorators: true
              },
              transform: {
                legacyDecorator: true,
                decoratorMetadata: true
              },
              keepClassNames: true
            },
            module: {
              type: 'es6',
              strict: true
            },
            sourceMaps: 'inline'
          })
        ).code
      );
    }

    if (isNodeModules) {
      /** write cjs */
      await fs.writeFile(
        cjsFile,
        (
          await transform(await formatFile(content), {
            jsc: {
              target: 'es2020',
              parser: {
                syntax: 'typescript',
                decorators: true
              },
              transform: {
                legacyDecorator: true,
                decoratorMetadata: true
              },
              keepClassNames: true
            },
            module: {
              type: 'commonjs',
              strict: true
            },
            sourceMaps: 'inline'
          })
        ).code
      );
    }
  } catch (e) {
    log.error('Failed To Write File:', {
      path,
      message: e.message,
      stack: e.stack
    });

    process.exit(1);
  }
};
