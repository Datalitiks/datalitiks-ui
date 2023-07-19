import { cva, type RecipeVariantProps } from '@datalitiks/datalitiks-ui/css'
import { HTMLStyledProps } from '@datalitiks/datalitiks-ui/jsx';
import { ChildrenTypes } from '@/types/common';

export const cardRecipe = cva({
  base: {
    borderRadius: '10px',
    borderWidth: '1px',
    boxShadow: '5px 5px 3px 0px rgba(0,0,0,0.25)',
    margin: 'auto',
    maxWidth: '700px',
    paddingBottom: '3',
    paddingLeft: '6',
    paddingRight: '6',
    paddingTop: '3',
  },
  variants: {
    color: {
      brand: {
        color: 'brand.500',
        bg: 'brand.50',
        borderColor: 'brand.600',
      },
      primary: {
        color: 'primary.500',
        bg: 'primary.50',
        borderColor: 'primary.600',
      },
      secondary: {
        color: 'secondary.500',
        bg: 'secondary.50',
        borderColor: 'secondary.600',
      },
      accent: {
        color: 'accent.500',
        bg: 'accent.50',
        borderColor: 'accent.600',
      },
      tertiary: {
        color: 'tertiary.500',
        bg: 'tertiary.50',
        borderColor: 'tertiary.600',
      },
    },
    shape: {
      square: { rounded: 'none' },
      semi: { rounded: '10px' },
      rounded: { rounded: 'full' },
    },
    size: {
      xs: {
        maxWidth: '200px'
      },
      sm: {
        maxWidth: '350px'
      },
      md: {
        maxWidth: '500px'
      },
      lg: {
        maxWidth: '700px'
      },
      xl: {
        maxWidth: 'none'
      }
    }
  },
  defaultVariants: {
    color: 'brand',
    size: 'md',
    shape: 'semi'
  }
})

export type CardProps = HTMLStyledProps<'div'> &
  RecipeVariantProps<typeof cardRecipe> & {
    children?: ChildrenTypes
  };
