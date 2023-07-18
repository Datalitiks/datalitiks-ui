import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  target: 'es2015',
  sourcemap: true,
  dts: true,
  outDir: 'dist',
  format: ['cjs', 'esm'],
  bundle: false,
  external: ['@datalitiks/datalitiks-ui'],
  entry: ['./src/index.ts', "./src/**/*.{ts,tsx}"],
  esbuildOptions(options) {
    // the directory structure will be the same as the source
    options.outbase = "./";
    options.banner = {
      js: '"use client"',
    }
  },
})
