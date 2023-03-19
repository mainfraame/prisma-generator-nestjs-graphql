import { camelCase, startCase } from 'lodash';

import { writeFileSafely } from '../utils/writeFileSafely';

export async function generateResolvers(dmmf, settings) {
  for (const model of dmmf.datamodel.models) {
    const content = `
    import { Context, Int, Resolver, Query, Args, Mutation } from '@nestjs/graphql';
    import { Prisma, PrismaClient } from '@prisma/client';

    import { 
      Create${startCase(model.name)}Dto,
      Delete${startCase(model.name)}Dto,
      FindMany${startCase(model.name)}Dto, 
      FindUnique${startCase(model.name)}Dto,
      UpdateData${startCase(model.name)}Dto,
      UpdateWhere${startCase(model.name)}Dto,
    } from '../dto/${model.name}.dto';

    import { ${model.name} } from '../entities/${model.name}.entity';
    
    @Resolver(() => ${model.name})
    export class ${model.name}Resolver {
      @Query(() => ${model.name})
      async get${startCase(model.name)}
     (@Context() context: { prisma: PrismaClient },
     @Args('where', {type: () => FindUnique${startCase(
       model.name
     )}Dto}) where: Prisma.${model.name}FindUniqueArgs['where']) {
        return context.prisma.${camelCase(model.name)}.findUnique({where});
      }
      
      @Query(() => [${model.name}])
      async getAll${startCase(model.name)}${
      model.name.endsWith('s') ? '' : 's'
    }(
     @Context() context: { prisma: PrismaClient },
     @Args('where', {type: () => FindMany${startCase(
       model.name
     )}Dto, nullable: true}) where?: Prisma.${model.name}FindManyArgs['where'],
     @Args('skip',  { type: () => Int, nullable: true }) skip?: number,
     @Args('take',  { type: () => Int, nullable: true }) take?: number
     ) {
        return context.prisma.${camelCase(
          model.name
        )}.findMany({...where ? {where} : {}, skip: skip ?? 0, take: take ?? 100});
      }
      
      @Mutation(() => ${model.name})
      async create${startCase(model.name)}(
      @Context() context: { prisma: PrismaClient },
      @Args('data', {type: () => Create${startCase(
        model.name
      )}Dto}) data: Prisma.${model.name}CreateArgs['data']) {
          return context.prisma.${camelCase(model.name)}.create({data});
      }
      
      @Mutation(() => ${model.name})
      async delete${startCase(model.name)}(
      @Context() context: { prisma: PrismaClient },
      @Args('where', {type: () => Delete${startCase(
        model.name
      )}Dto}) where: Prisma.${model.name}DeleteArgs['where']) {
        return context.prisma.${camelCase(model.name)}.delete({where});
      }

      @Mutation(() => ${model.name})
      async update${startCase(model.name)}(
      @Context() context: { prisma: PrismaClient },
      @Args('where', {type: () => UpdateWhere${startCase(
        model.name
      )}Dto}) where: Prisma.${
      model.name
    }UpdateArgs['where'], @Args('data', {type: () => UpdateData${startCase(
      model.name
    )}Dto}) data: Prisma.${model.name}UpdateArgs['data']) {
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
