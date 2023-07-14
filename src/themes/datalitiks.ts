import { definePreset } from '@pandacss/dev'

export const datalitiksPreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
            brand: { value: 'tomato' },
            primary: {
                50: { value: '#fef2f2' },
                100: { value: '#fee2e2' },
                200: { value: '#fecaca' },
                300: { value: '#fca5a5' },
                400: { value: '#f87171' },
                500: { value: '#ef4444' },
                600: { value: '#dc2626' },
                700: { value: '#b91c1c' },
                800: { value: '#991b1b' },
                900: { value: '#7f1d1d' },
                950: { value: '#450a0a' }
            },
            secondary: {
                50: { value: '#f5f5f5' },
                100: { value: '#e5e5e5' },
                200: { value: '#d4d4d4' },
                300: { value: '#a3a3a3' },
                400: { value: '#737373' },
                500: { value: '#525252' },
                600: { value: '#404040' },
                700: { value: '#262626' },
                800: { value: '#171717' },
                900: { value: '#0f0f0f' },
                950: { value: '#000000' }
            }
        }
    }
};
