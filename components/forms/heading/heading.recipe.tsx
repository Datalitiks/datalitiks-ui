import { cva, type RecipeVariantProps } from '@datalitiks/styled-system/css'
import { HTMLStyledProps } from '@datalitiks/styled-system/jsx';
import {ChildrenTypes} from "../../../types/common";

export const headingRecipe = cva({
  base: {},
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

export type HeadingProps = HTMLStyledProps<'h2'> &
  RecipeVariantProps<typeof headingRecipe> & {
    children?: ChildrenTypes
  };
