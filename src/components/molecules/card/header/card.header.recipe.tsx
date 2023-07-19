import { cva, type RecipeVariantProps } from '@datalitiks/datalitiks-ui/css'
import { HTMLStyledProps } from '@datalitiks/datalitiks-ui/jsx';
import { ChildrenTypes } from '@/types/common';

export const cardHeaderRecipe = cva({
  base: {
    textAlign: 'center'
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
        fontSize: '18px',
        fontWeight: '300',
      },
      sm: {
        fontSize: '22px',
        fontWeight: '500',
      },
      md: {
        fontSize: '26px',
        fontWeight: '600',
      },
      lg: {
        fontSize: '30px',
        fontWeight: '700'
      },
      xl: {
        fontSize: '40px',
        fontWeight: '900'
      }
    }
  },
  defaultVariants: {
    color: 'brand',
    size: 'md',
  }
})

export type CardHeaderProps = HTMLStyledProps<'h2'> &
  RecipeVariantProps<typeof cardHeaderRecipe> & {
    children?: ChildrenTypes
  };
