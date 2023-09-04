import type { GeneratorConfig } from '@prisma/generator-helper';

export type Settings = Partial<
  Omit<GeneratorConfig, 'config'> & {
    defaultOutput?: string;
    outputPath?: string;
    startTime?: number;
    config: {
      excludes?: string[];
      output?: string;
    };
    excludes?: string[];
    // output?: string;
    version?: string;
  }
>;
