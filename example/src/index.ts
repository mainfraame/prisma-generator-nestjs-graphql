import { TodoResolver } from './resolvers/Todo.resolver';
import { UserResolver } from './resolvers/User.resolver';
import { TodoOrderBy } from './scalar/TodoOrderBy.scalar';
import { UserOrderBy } from './scalar/UserOrderBy.scalar';

export * from './arg/User.arg';
export * from './dto/User.dto';
export * from './entities/User.entity';
export * from './scalar/UserOrderBy.scalar';

export * from './arg/Todo.arg';
export * from './dto/Todo.dto';
export * from './entities/Todo.entity';
export * from './scalar/TodoOrderBy.scalar';

export const providers = [TodoOrderBy, TodoResolver, UserOrderBy, UserResolver];

export { PrismaModule } from './prisma/prisma.module';
export { PrismaService } from './prisma/prisma.service';
