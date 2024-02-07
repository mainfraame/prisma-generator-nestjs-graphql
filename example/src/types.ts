import { Employee, PrismaClient, Timesheet, Todo, User } from '@prisma/client';

import DataLoader from 'dataloader';

export interface GraphQlAuthParams<Req = any, Res = any> {
  action: 'delete' | 'find' | 'update';
  args: Record<string, any>;
  field: string;
  prisma?: PrismaClient;
  req: Req;
  res: Res;
}

export interface GraphQlContext<Req = any, Res = any> {
  authenticate?: (
    context: GraphQlAuthParams<Req, Res>
  ) => Promise<boolean> | boolean;
  loaders: {
    employeeTimesheets: DataLoader<number, Timesheet[]>;
    timesheetEmployee: DataLoader<number, Employee>;
    todoUser: DataLoader<number, User>;
    userTodos: DataLoader<number, Todo[]>;
  };
  prisma: PrismaClient;
  req: Req;
  res: Res;
}
