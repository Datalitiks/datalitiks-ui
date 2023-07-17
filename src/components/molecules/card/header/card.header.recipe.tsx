import { cva, type RecipeVariantProps } from '@/styled-system/css'
import { HTMLStyledProps } from '@/styled-system/jsx';
import { ChildrenTypes } from '@/types/common';

export const cardHeaderRecipe = cva({
  base: {
    paddingLeft: '6',
    paddingRight: '6',
    paddingTop: '3',
    paddingBottom: '3',
  },
  variants: {
    color: {},
    size: {
      xs: {
        fontSize: 'sm',
        fontWeight: '100'
      },
      sm: {
        fontSize: 'sm',
        fontWeight: '300'
      },
      md: {
        fontSize: 'md',
        fontWeight: '500'
      },
      lg: {
        fontSize: 'lg',
        fontWeight: '700'
      },
      xl: {
        fontSize: 'lg',
        fontWeight: '900'
      }
    }
  },
  defaultVariants: {
    size: 'md',
  }
})

export type CardHeaderProps = HTMLStyledProps<'h2'> &
  RecipeVariantProps<typeof cardHeaderRecipe> & {
    children?: ChildrenTypes
  };