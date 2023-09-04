const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

esbuild.build({
  entryPoints: [__dirname + '/src/generator.ts'],
  bundle: true,
  sourcemap: 'inline',
  platform: 'node',
  outfile: __dirname + '/dist/prisma-generator-nestjs-graphql-crud.js',
  plugins: [nodeExternalsPlugin()]
});
