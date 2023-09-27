import { TodoResolver } from './resolvers/TodoResolver';
import { UserResolver } from './resolvers/UserResolver';
import { DateFilterScalar } from './scalar/DateFilterScalar';
import { IntFilterScalar } from './scalar/IntFilterScalar';
import { StringFilterScalar } from './scalar/StringFilterScalar';
import { TodoOrderByScalar } from './scalar/TodoOrderByScalar';
import { UserOrderByScalar } from './scalar/UserOrderByScalar';

export * from './arg/UserArg';
export * from './dto/UserDto';
export * from './entities/UserEntity';
export * from './scalar/UserOrderByScalar';

export * from './arg/TodoArg';
export * from './dto/TodoDto';
export * from './entities/TodoEntity';
export * from './scalar/TodoOrderByScalar';

export const prismaProviders = [
  DateFilterScalar,
  IntFilterScalar,
  StringFilterScalar,
  TodoOrderByScalar,
  TodoResolver,
  UserOrderByScalar,
  UserResolver
];

export { PrismaModule } from './prisma/prisma.module';
export { PrismaService } from './prisma/prisma.service';
