# prisma-generator-nestjs-graphql

### Getting Started

```
npm i prisma-generator-nestjs-graphql
```

Inside of your prisma schema, add the following:
```
generator nestJsGraphQl {
  provider = "prisma-generator-nestjs-graphql"
}
```

The output will be generated to:
```
node_modules/@generated/graphql
```

Import the resolvers:

```
import { resolvers } from '@generated/graphql';
```


