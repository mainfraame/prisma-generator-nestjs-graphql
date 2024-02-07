import { EmployeeResolver } from './resolvers/EmployeeResolver';
import { TimesheetResolver } from './resolvers/TimesheetResolver';
import { TodoResolver } from './resolvers/TodoResolver';
import { UserResolver } from './resolvers/UserResolver';
import { DateFilterScalar } from './scalar/DateFilterScalar';
import { EmployeeOrderByScalar } from './scalar/EmployeeOrderByScalar';
import { IntFilterScalar } from './scalar/IntFilterScalar';
import { StringFilterScalar } from './scalar/StringFilterScalar';
import { TimesheetOrderByScalar } from './scalar/TimesheetOrderByScalar';
import { TodoOrderByScalar } from './scalar/TodoOrderByScalar';
import { UserOrderByScalar } from './scalar/UserOrderByScalar';

export * from './arg/EmployeeArg';
export * from './dto/EmployeeDto';
export * from './entities/EmployeeEntity';
export * from './scalar/EmployeeOrderByScalar';

export * from './arg/TimesheetArg';
export * from './dto/TimesheetDto';
export * from './entities/TimesheetEntity';
export * from './scalar/TimesheetOrderByScalar';

export * from './arg/TodoArg';
export * from './dto/TodoDto';
export * from './entities/TodoEntity';
export * from './scalar/TodoOrderByScalar';

export * from './arg/UserArg';
export * from './dto/UserDto';
export * from './entities/UserEntity';
export * from './scalar/UserOrderByScalar';

export const prismaProviders = [
  DateFilterScalar,
  EmployeeOrderByScalar,
  EmployeeResolver,
  IntFilterScalar,
  StringFilterScalar,
  TimesheetOrderByScalar,
  TimesheetResolver,
  TodoOrderByScalar,
  TodoResolver,
  UserOrderByScalar,
  UserResolver
];

export { DataLoaderService } from './prisma/dataLoader.service';
export { PrismaModule } from './prisma/prisma.module';
export { PrismaService } from './prisma/prisma.service';
export type { GraphQlAuthParams, GraphQlContext } from './types';
