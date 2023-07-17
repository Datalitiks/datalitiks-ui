import { defineConfig } from '@pandacss/dev';
import { datalitiksPreset } from './src/themes/datalitiks';

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ['./src/**/*.{js,jsx,ts,tsx}', './.ladle/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    presets: ['@pandacss/dev/presets', datalitiksPreset],

    // Useful for theme customization
    theme: {
        extend: {}
    },

    // The output directory for your css system
    emitPackage: true,
    outdir: '@datalitiks/datalitiks-ui',

    // The JSX framework to use
    jsxFramework: 'react',

    // emitPackage: true,
});
