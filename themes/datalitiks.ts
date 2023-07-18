import { definePreset } from '@pandacss/dev'

export const datalitiksPreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            50: { value: '#fee8e7' },
            100: { value: '#fcd2cf' },
            200: { value: '#fbbbb8' },
            300: { value: '#faa4a0' },
            400: { value: '#f88e88' },
            500: { value: '#f77770' },
            600: { value: '#f44137' },
            700: { value: '#e3180d' },
            800: { value: '#aa120a' },
            900: { value: '#710c06' },
            950: { value: '#390603' }
          },
          primary: {
            50: { value: '#bdf1f6' },
            100: { value: '#7be2ed' },
            200: { value: '#38d4e4' },
            300: { value: '#19a9b7' },
            400: { value: '#106c75' },
            500: { value: '#072f33' },
            600: { value: '#06272b' },
            700: { value: '#051f22' },
            800: { value: '#04171a' },
            900: { value: '#021011' },
            950: { value: '#010809' }
          },
          secondary: {
            50: { value: '#f7f8ec' },
            100: { value: '#eff0da' },
            200: { value: '#e7e9c7' },
            300: { value: '#dfe2b4' },
            400: { value: '#d7daa2' },
            500: { value: '#cfd38f' },
            600: { value: '#bdc265' },
            700: { value: '#a3a943' },
            800: { value: '#7b7f32' },
            900: { value: '#525521' },
            950: { value: '#292a11' }
          },
          accent: {
            50: { value: '#fef2e7' },
            100: { value: '#fce5cf' },
            200: { value: '#fbd8b8' },
            300: { value: '#facaa0' },
            400: { value: '#f8bd88' },
            500: { value: '#f7b070' },
            600: { value: '#f49137' },
            700: { value: '#e3720d' },
            800: { value: '#aa560a' },
            900: { value: '#713906' },
            950: { value: '#391d03' }
          },
          tertiary: {
            50: { value: '#deeef0' },
            100: { value: '#bddde0' },
            200: { value: '#9bcdd1' },
            300: { value: '#7abcc2' },
            400: { value: '#59abb3' },
            500: { value: '#458f96' },
            600: { value: '#39777d' },
            700: { value: '#2e5f64' },
            800: { value: '#22484b' },
            900: { value: '#173032' },
            950: { value: '#0b1819' }
          },
        }
      }
    }
  }
})
