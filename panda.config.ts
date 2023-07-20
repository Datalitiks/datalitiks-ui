import { defineConfig } from '@pandacss/dev';
import { datalitiksPreset } from './themes/datalitiks';

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ['./**/*.{js,jsx,ts,tsx}', './.ladle/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: ['./node_modules/**/*.{js,jsx,ts,tsx}', './ladle/**/*.{js,jsx,ts,tsx}', './dist/**/*.{js,jsx,ts,tsx}', './docs/**/*.{js,jsx,ts,tsx}'],

    presets: ['@pandacss/dev/presets', datalitiksPreset],

    // Useful for theme customization
    theme: {
        extend: {}
    },

    // The output directory for your css system
    emitPackage: true,
    outdir: '@datalitiks/styled-system',

    // The JSX framework to use
    jsxFramework: 'react',

    // emitPackage: true,
});
