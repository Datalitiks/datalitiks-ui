import { defineConfig } from '@pandacss/dev';
import { datalitiksTheme } from './src/themes/datalitiks';

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    // Where to look for your css declarations
    include: ['./src/**/*.{js,jsx,ts,tsx}', './.ladle/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: { ...datalitiksTheme }
    },

    // The output directory for your css system
    outdir: './src/styled-system',

    // The JSX framework to use
    jsxFramework: 'react'
});
