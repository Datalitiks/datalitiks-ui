import { cva, type RecipeVariantProps } from '@/styled-system/css'
import { HTMLStyledProps } from '@/styled-system/jsx';
import { ChildrenTypes } from '@/types/common';

export const labelRecipe = cva({
  base: {},
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

export type LabelProps = HTMLStyledProps<'label'> &
  RecipeVariantProps<typeof labelRecipe> & {
    children?: ChildrenTypes
  };