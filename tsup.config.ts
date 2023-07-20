import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  target: 'es2015',
  sourcemap: true,
  dts: true,
  outDir: 'dist',
  format: ['esm'],
  bundle: false,
  external: ['@datalitiks/datalitiks-ui'],
  entry: ['./index.ts', "./components/**/*.{ts,tsx}", './hooks/**/*.{ts,tsx}', './utils/**/*.{ts,tsx}', './themes/**/*.{ts,tsx}', './types/**/*.{ts,tsx}'],
  esbuildOptions(options) {
    // the directory structure will be the same as the source
    options.outbase = "./";
    options.banner = {
      js: '"use client"',
    }
  },
})
