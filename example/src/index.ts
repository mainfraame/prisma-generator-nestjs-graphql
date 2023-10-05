import { TodoResolver } from './resolvers/TodoResolver';
import { UserResolver } from './resolvers/UserResolver';
import { DateFilterScalar } from './scalar/DateFilterScalar';
import { IntFilterScalar } from './scalar/IntFilterScalar';
import { StringFilterScalar } from './scalar/StringFilterScalar';
import { TodoGroupByScalar } from './scalar/TodoGroupByScalar';
import { TodoOrderByScalar } from './scalar/TodoOrderByScalar';
import { UserGroupByScalar } from './scalar/UserGroupByScalar';
import { UserOrderByScalar } from './scalar/UserOrderByScalar';

export * from './arg/UserArg';
export * from './dto/UserDto';
export * from './entities/UserEntity';
export * from './scalar/UserGroupByScalar';
export * from './scalar/UserOrderByScalar';

export * from './arg/TodoArg';
export * from './dto/TodoDto';
export * from './entities/TodoEntity';
export * from './scalar/TodoGroupByScalar';
export * from './scalar/TodoOrderByScalar';

export const prismaProviders = [
  DateFilterScalar,
  IntFilterScalar,
  StringFilterScalar,
  TodoGroupByScalar,
  TodoOrderByScalar,
  TodoResolver,
  UserGroupByScalar,
  UserOrderByScalar,
  UserResolver
];

export { PrismaModule } from './prisma/prisma.module';
export { PrismaService } from './prisma/prisma.service';
