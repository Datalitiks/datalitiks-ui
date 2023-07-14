import { defineConfig } from 'tsup'
import { tsconfigPathsPlugin } from "esbuild-plugin-tsconfig-paths";
import path from 'path'

export default defineConfig({
  splitting: true,
  clean: true,
  dts: true,
  format: ['esm'],
  minify: true,
  bundle: true,
  skipNodeModulesBundle: true,
  target: 'es2022',
  outDir: 'dist',
  entry: ['src/index.ts'],
  esbuildOptions(options) {
      // the directory structure will be the same as the source
      options.outbase = "./";
  },
  esbuildPlugins: [tsconfigPathsPlugin(
    { tsconfig: path.resolve(__dirname, "./tsconfig.json") }
  )],
})