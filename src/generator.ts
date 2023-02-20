import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { logger } from '@prisma/sdk'
import path from 'path'
import { camelCase, uniq } from 'lodash'
import { GENERATOR_NAME } from './constants'
import { writeFileSafely } from './utils/writeFileSafely'

const { version } = require('../package.json')

const PrismaTypes = {
  BigInt: {
    graphql: 'Int',
    ts: 'number',
  },
  Int: {
    graphql: 'Int',
    ts: 'number',
  },
  Json: {
    graphql: '',
    ts: 'Record<string, unknown>',
  },
  DateTime: {
    graphql: 'Date',
    ts: 'Date',
  },
  Boolean: {
    graphql: 'Boolean',
    ts: 'Date',
  },
  String: {
    graphql: 'String',
    ts: 'string',
  },
  default: (model) => ({
    graphql: model,
    ts: model,
  }),
}

const ModelImports = []

const getGqlType = (scalar) => {
  // if (!PrismaTypes[scalar]) {
  //   // console.log(scalar)
  // }
  return (PrismaTypes[scalar] ?? PrismaTypes.String).graphql
}

const getTsType = (scalar) => {
  // if (!PrismaTypes[scalar]) {
  // console.log(scalar)
  // ModelImports.push(scalar)
  // }
  return (PrismaTypes[scalar] ?? PrismaTypes.String).ts
}

generatorHandler({
  onManifest() {
    logger.info(`${GENERATOR_NAME}:Registered`)
    return {
      version,
      defaultOutput: '../src/generated',
      prettyName: GENERATOR_NAME,
    }
  },
  onGenerate: async (options: GeneratorOptions) => {
    console.log(options.dmmf.mappings.modelOperations)

    for (const model of options.dmmf.datamodel.models) {
      const graphqlTypes = uniq(
        model.fields.map((field) => getGqlType(field.type)),
      )
        .filter((type) => !['Boolean', 'Date', 'Json', 'String'].includes(type))
        .filter(Boolean)

      await writeFileSafely(
        path.join(__dirname, `../src/generated/dto/${model.name}.dto.ts`),
        `
        import { Field${graphqlTypes.length ? ',' : ''} ${graphqlTypes.join(
          ', ',
        )}, ObjectType } from '@nestjs/graphql';
        
        @ObjectType()
        export class ${model.name} {
          ${model.fields
            .reduce((acc, field) => {
              return [
                ...acc,
                `\n@Field(${
                  PrismaTypes[field.type]?.graphql
                    ? `() => ${getGqlType(field.type)}`
                    : ''
                })\n${field.name}${field.isRequired ? '' : '?'}: ${getTsType(
                  field.type,
                )};`,
              ]
            }, [])
            .join('\n')}
        }
      `,
      )

      const primaryKey = model.fields.find((field) => field.isId)
      // const unique = model.fields.filter((field) => field.isUnique)

      if (!primaryKey) {
        console.error(primaryKey)
      }
      await writeFileSafely(
        path.join(__dirname, `../src/generated/resolver/${model.name}.resolver.ts`),
        `
        import { Args, Resolver, Int, Query } from '@nestjs/graphql';
        import { PrismaClient } from '@prisma/client';
        
        import { ${model.name} } from '../dto/${model.name}.dto';
        
        @Resolver(() => ${model.name})
        export class ${model.name}Resolver {
          private prisma = new PrismaClient({})

          ${getQuery(model, primaryKey)}
        };
      `,
      )
    }
  },
})

const getQueryArgs = (primaryKey) => {
  return `
  @Args('${primaryKey.fields.join(
    ',',
  )}', { type: () => String }) ${primaryKey.fields.join(',')}: string
  `
}
const getQuery = (model, primaryKey) => {
  if (primaryKey?.name) {
    return `
    @Query(() => ${model.name})
          async ${camelCase(model.name)}(@Args('${
      primaryKey.name
    }', { type: () => ${getGqlType(primaryKey.type)} }) ${
      primaryKey.name
    }: ${getTsType(primaryKey.type)}) {
            return this.prisma.${camelCase(model.name)}.findUnique({ where: {${
      primaryKey.name
    }}});
          }
  `
  }

  if (primaryKey?.fields?.length && primaryKey?.name === null) {
    return `
    @Query(() => ${model.name})
          async ${camelCase(model.name)}(${getQueryArgs(primaryKey)}) {
            return this.prisma.${camelCase(model.name)}.findUnique({ where: {${
      primaryKey.name
    }}});
          }
  `
  }
}
