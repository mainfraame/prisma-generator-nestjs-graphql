import { camelCase } from 'lodash';

import { writeFileSafely } from '../utils/writeFileSafely';

export async function generateResolvers(dmmf, settings) {
  for (const model of dmmf.datamodel.models) {
    const content = `
    import { Context, Int, Resolver, Query, Args, Mutation } from '@nestjs/graphql';
    import { Prisma, PrismaClient } from '@prisma/client';

    import { 
      Create${model.name}Dto,
      Delete${model.name}Dto,
      FindMany${model.name}Dto, 
      FindUnique${model.name}Dto,
      UpdateData${model.name}Dto,
      UpdateWhere${model.name}Dto,
    } from '../dto/${model.name}.dto';

    import { ${model.name} } from '../entities/${model.name}.entity';
    
    @Resolver(() => ${model.name})
    export class ${model.name}Resolver {
      @Query(() => ${model.name})
      async get${model.name}
     (@Context() context: { prisma: PrismaClient },
     @Args('where', {type: () => FindUnique${model.name}Dto}) where: Prisma.${
      model.name
    }FindUniqueArgs['where']) {
        return context.prisma.${camelCase(model.name)}.findUnique({where});
      }
      
      @Query(() => [${model.name}])
      async getAll${model.name}${model.name.endsWith('s') ? '' : 's'}(
     @Context() context: { prisma: PrismaClient },
     @Args('where', {type: () => FindMany${model.name}Dto}) where: Prisma.${
      model.name
    }FindManyArgs['where'],
     @Args('skip',  { type: () => Int, nullable: true }) skip: number,
     @Args('take',  { type: () => Int, nullable: true }) take: number
     ) {
        return context.prisma.${camelCase(
          model.name
        )}.findMany({where, skip: skip ?? 0, take: take ?? 100});
      }
      
      @Mutation(() => ${model.name})
      async create${model.name}(
      @Context() context: { prisma: PrismaClient },
      @Args('data', {type: () => Create${model.name}Dto}) data: Prisma.${
      model.name
    }CreateArgs['data']) {
          return context.prisma.${camelCase(model.name)}.create({data});
      }
      
      @Mutation(() => ${model.name})
      async delete${model.name}(
      @Context() context: { prisma: PrismaClient },
      @Args('where', {type: () => Delete${model.name}Dto}) where: Prisma.${
      model.name
    }DeleteArgs['where']) {
        return context.prisma.${camelCase(model.name)}.delete({where});
      }

      @Mutation(() => ${model.name})
      async update${model.name}(
      @Context() context: { prisma: PrismaClient },
      @Args('where', {type: () => UpdateWhere${model.name}Dto}) where: Prisma.${
      model.name
    }UpdateArgs['where'], @Args('data', {type: () => UpdateData${
      model.name
    }Dto}) data: Prisma.${model.name}UpdateArgs['data']) {
          return context.prisma.${camelCase(model.name)}.update({where, data});
        }
      
      }
      `;

    await writeFileSafely(
      `${settings.defaultOutput}/resolvers/${model.name}.resolver.ts`,
      content
    );
  }
}
