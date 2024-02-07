import type { GeneratorConfig } from '@prisma/generator-helper';

export type Settings = Partial<
  Omit<GeneratorConfig, 'config'> & {
    config: {
      includeMutations?: string;
      excludes?: string[];
      output?: string;
      usePassport?: string;
      usePassportStrategy?: string;
    };
    defaultOutput?: string;
    excludes?: string[];
    includeMutations?: boolean;
    outputPath?: string;
    startTime?: number;
    usePassport?: boolean;
    usePassportStrategy?: string;
    version?: string;
  }
>;
