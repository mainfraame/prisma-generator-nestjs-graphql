import { Settings } from '../types';
import { writeFile } from '../utils';

export async function generateMetaDataDecorator(settings: Settings) {
  await writeFile(
    `${settings.defaultOutput}/metadata.decorator.ts`,
    `
      import { createParamDecorator, ExecutionContext } from '@nestjs/common';
      import { GqlExecutionContext } from '@nestjs/graphql';
      
      export const GqlMetaData = createParamDecorator(
        (data: unknown, context: ExecutionContext) => {
          const ctx = GqlExecutionContext.create(context);
          const request = ctx.getContext().req;
          return data ? request[data] : request;
        },
      );
    `
  );
}
