import type { GeneratorConfig } from '@prisma/generator-helper';

export type Settings = Partial<
  Omit<GeneratorConfig, 'config'> & {
    defaultOutput?: string;
    excludeMutations?: boolean;
    outputPath?: string;
    startTime?: number;
    config: {
      excludeMutations?: string;
      excludes?: string[];
      output?: string;
    };
    excludes?: string[];
    // output?: string;
    version?: string;
  }
>;
