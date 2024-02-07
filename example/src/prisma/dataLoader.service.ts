import { Injectable } from '@nestjs/common';
import { Employee, Timesheet, Todo, User } from '@prisma/client';

import DataLoader from 'dataloader';

import { PrismaService } from './prisma.service';

@Injectable()
export class DataLoaderService {
  constructor(private prisma: PrismaService) {}

  create() {
    return {
      employeeTimesheets: new DataLoader<number, Timesheet[]>(
        async (ids: any[]) => {
          const parsedIds = ids.map(id => JSON.parse(id));

          const rows = await this.prisma.timesheet
            .findMany({
              where: {
                employeeId: {
                  in: parsedIds
                }
              }
            })
            .catch(() => []);

          const map = {};

          /** use for-loop for performance */
          for (let i = 0; i < rows.length; i++) {
            const rowId = rows[i]['employeeId'];
            map[rowId] = [...(map[rowId] ?? []), rows[i]];
          }

          return ids.map(id => map[id] ?? []);
        }
      ),
      timesheetEmployee: new DataLoader<number, Employee>(
        async (ids: any[]) => {
          const parsedIds = ids.map(id => JSON.parse(id));

          const rows = await this.prisma.employee
            .findMany({
              where: {
                id: {
                  in: parsedIds
                }
              }
            })
            .catch(() => []);

          const map = {};

          /** use for-loop for performance */
          for (let i = 0; i < rows.length; i++) {
            const rowId = rows[i]['id'];
            map[rowId] = rows[i];
          }

          return ids.map(id => map[id] ?? null);
        }
      ),
      todoUser: new DataLoader<number, User>(async (ids: any[]) => {
        const parsedIds = ids.map(id => JSON.parse(id));

        const rows = await this.prisma.user
          .findMany({
            where: {
              id: {
                in: parsedIds
              }
            }
          })
          .catch(() => []);

        const map = {};

        /** use for-loop for performance */
        for (let i = 0; i < rows.length; i++) {
          const rowId = rows[i]['id'];
          map[rowId] = rows[i];
        }

        return ids.map(id => map[id] ?? null);
      }),
      userTodos: new DataLoader<number, Todo[]>(async (ids: any[]) => {
        const parsedIds = ids.map(id => JSON.parse(id));

        const rows = await this.prisma.todo
          .findMany({
            where: {
              userId: {
                in: parsedIds
              }
            }
          })
          .catch(() => []);

        const map = {};

        /** use for-loop for performance */
        for (let i = 0; i < rows.length; i++) {
          const rowId = rows[i]['userId'];
          map[rowId] = [...(map[rowId] ?? []), rows[i]];
        }

        return ids.map(id => map[id] ?? []);
      })
    };
  }
}
