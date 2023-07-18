import { cva, type RecipeVariantProps } from '@/styled-system/css'
import { HTMLStyledProps } from '@/styled-system/jsx';
import { ChildrenTypes } from '@/types/common';

export const paragraphRecipe = cva({
  base: {
    marginBottom: '30px'
  },
  variants: {
    color: {
      brand: {
        color: 'brand.300'
      },
      primary: {
        color: 'primary.300'
      },
      secondary: {
        color: 'secondary.300'
      },
      accent: {
        color: 'accent.300'
      },
      tertiary: {
        color: 'tertiary.300'
      }
    },
    size: {
      xs: {
        fontSize: '10px',
        fontWeight: '100',
      },
      sm: {
        fontSize: '12px',
        fontWeight: '200',
      },
      md: {
        fontSize: '15px',
        fontWeight: '300',
      },
      lg: {
        fontSize: '18px',
        fontWeight: '400'
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

export type ParagraphProps = HTMLStyledProps<'h2'> &
  RecipeVariantProps<typeof paragraphRecipe> & {
    children?: ChildrenTypes
  };