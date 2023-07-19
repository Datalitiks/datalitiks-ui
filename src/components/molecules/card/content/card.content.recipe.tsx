import { cva, type RecipeVariantProps } from '@datalitiks/datalitiks-ui/css'
import { HTMLStyledProps } from '@datalitiks/datalitiks-ui/jsx';
import { ChildrenTypes } from '@/types/common';

export const cardContentRecipe = cva({
  base: {
    textAlign: 'justify',
    margin: '10px auto 25px'
  },
  variants: {
    color: {
      brand: {
        color: 'brand.500'
      },
      primary: {
        color: 'primary.500'
      },
      secondary: {
        color: 'secondary.500'
      },
      accent: {
        color: 'accent.500'
      },
      tertiary: {
        color: 'tertiary.500'
      }
    },
    size: {
      xs: {
        fontSize: '10px',
        fontWeight: '300',
      },
      sm: {
        fontSize: '12px',
        fontWeight: '400',
      },
      md: {
        fontSize: '15px',
        fontWeight: '400',
      },
      lg: {
        fontSize: '18px',
        fontWeight: '500'
      },
      xl: {
        fontSize: '25px',
        fontWeight: '500'
      }
    }
  },
  defaultVariants: {
    color: 'brand',
    size: 'md',
  }
})

export type CardContentProps = HTMLStyledProps<'p'> &
  RecipeVariantProps<typeof cardContentRecipe> & {
    children?: ChildrenTypes
  };
