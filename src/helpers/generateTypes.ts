import { Settings } from '../types';
import { writeFile } from '../utils';

export async function generateTypes(
  settings: Settings,
  loaders: [string, string, string[]][]
) {
  await writeFile(
    `${settings.defaultOutput}/types.ts`,
    `
      import { PrismaClient, ${loaders.map(loader => loader[2][1].replace('[]', '')).join(', ')} } from '@prisma/client';
      import DataLoader from 'dataloader';
            
      export interface GraphQlAuthParams<Req = any, Res = any> {
        action: 'delete' | 'find' | 'update';
        args: Record<string, any>;
        field: string;
        prisma?: PrismaClient;
        req: Req;
        res: Res;
      }

      export interface GraphQlContext<Req = any, Res = any>{
        authenticate?: (context: GraphQlAuthParams<Req, Res>) => Promise<boolean> | boolean;
        loaders: {
          ${loaders.map(loader => `${loader[0]}: DataLoader<${loader[2].join(', ')}>`).join(',')}
        };
        prisma: PrismaClient;
        req: Req;
        res: Res;
      }
  `
  );
}
