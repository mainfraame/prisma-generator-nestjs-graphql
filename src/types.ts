import type { GeneratorConfig } from '@prisma/generator-helper';

export type Settings = Partial<
  Omit<GeneratorConfig, 'config'> & {
    defaultOutput?: string;
    includeMutations?: boolean;
    outputPath?: string;
    startTime?: number;
    config: {
      includeMutations?: string;
      excludes?: string[];
      output?: string;
    };
    excludes?: string[];
    // output?: string;
    version?: string;
  }
>;
