import { transform } from '@swc/core';

import fs from 'fs/promises';
import { basename, dirname } from 'path';
import prettier from 'prettier';

import { log } from './log';

export const formatFile = async (content: string): Promise<string> => {
  const config = await prettier
    .resolveConfigFile()
    .catch(() => Promise.resolve(null));

  const options = config
    ? await prettier.resolveConfig(config).catch(() => Promise.resolve(null))
    : null;

  if (!options) {
    log.warn('no prettier config found; skipping formatting');
    return content;
  }

  try {
    return prettier.format(content, {
      ...options,
      parser: 'typescript'
    });
  } catch (e) {
    log.warn('failed to apply prettier formatting', {
      content,
      message: e.message,
      stack: e.stack
    });

    return content;
  }
};

// todo:: refactor this to make it easier to understand
export const writeFile = async (path: string, content: string) => {
  const isNodeModules = path.includes('node_modules');

  const fileName = basename(path);

  const outputPath = isNodeModules
    ? dirname(path).split('@generated/graphql')[0] + '@generated/graphql'
    : path.replace(`/${fileName}`, '');

  const outputDir = dirname(path).split('@generated/graphql/')[1] ?? '';

  const srcDir = `${outputPath}${
    isNodeModules ? `/src${outputDir ? `/${outputDir}` : ''}` : outputDir ?? ''
  }`;

  const cjsDistDir = `${outputPath}/dist/cjs${outputDir ? `/${outputDir}` : ''}`;
  const esmDistDir = `${outputPath}/dist/esm${outputDir ? `/${outputDir}` : ''}`;

  if (isNodeModules) {
    await fs.mkdir(cjsDistDir, { recursive: true });
    await fs.mkdir(esmDistDir, { recursive: true });
  }

  await fs.mkdir(srcDir, { recursive: true });

  const srcFile = `${srcDir}/${fileName}`;
  const cjsFile = `${cjsDistDir}/${fileName.replace(/\.ts$/, '.js')}`;
  const jsFile = `${esmDistDir}/${fileName.replace(/\.ts$/, '.js')}`;

  try {
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
      content,
      message: e.message,
      stack: e.stack
    });

    await fs.writeFile(srcFile, content);

    process.exit(1);
  }
};
