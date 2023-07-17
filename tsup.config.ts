import { defineConfig } from 'tsup'
import { tsconfigPathsPlugin } from "esbuild-plugin-tsconfig-paths";
// @ts-ignore
import path from 'path'

export default defineConfig({
  clean: true,
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
