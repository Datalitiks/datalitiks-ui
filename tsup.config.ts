import { defineConfig } from 'tsup'
import { tsconfigPathsPlugin } from "esbuild-plugin-tsconfig-paths";

export default defineConfig({
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    }
  },
  entry: ['src/index.ts'],
  outDir: 'dist',
  splitting: true,
  external: ['react', 'react-dom'],
  tsconfig: 'tsconfig.json',
  sourcemap: true,
  clean: true,
  bundle: true,
  esbuildPlugins: [tsconfigPathsPlugin()],
})