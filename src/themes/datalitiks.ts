import { definePreset } from '@pandacss/dev'

export const datalitiksPreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            50: { value: '#FDF2F2' },
            100: { value: '#F9D9D9' },
            200: { value: '#F4B1B1' },
            300: { value: '#EF8888' },
            400: { value: '#EA6060' },
            500: { value: '#E53737' },
            600: { value: '#B22727' },
            700: { value: '#801818' },
            800: { value: '#4E0B0B' },
            900: { value: '#290404' },
            950: { value: '#0E0000' },
          },
          primary: {
            50: { value: '#FEF2F2' },
            100: { value: '#FEE6E6' },
            200: { value: '#FDC7C7' },
            300: { value: '#FAA7A7' },
            400: { value: '#F78080' },
            500: { value: '#F35353' },
            600: { value: '#D93838' },
            700: { value: '#B12020' },
            800: { value: '#901616' },
            900: { value: '#741313' },
            950: { value: '#400808' },
          },
          secondary: {
            50: { value: '#E6F7F3' },
            100: { value: '#C1ECE1' },
            200: { value: '#9BDAD0' },
            300: { value: '#73C7BF' },
            400: { value: '#4DB5AE' },
            500: { value: '#37A49D' },
            600: { value: '#28817B' },
            700: { value: '#196E5A' },
            800: { value: '#0E543F' },
            900: { value: '#062C20' },
            950: { value: '#000000' },
          },
        },
      },
    },
  },
})
