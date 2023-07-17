import { cva, type RecipeVariantProps } from '@/styled-system/css'
import { HTMLStyledProps } from '@/styled-system/jsx';
import { ChildrenTypes } from '@/types/common';

export const selectRecipe = cva({
  base: {
    display: 'block',
    padding: '1',
    width: '100px',
    borderRadius: '5px',
    margin: '10px 0 20px',
    color: 'primary.500',
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

export type SelectProps = HTMLStyledProps<'select'> &
  RecipeVariantProps<typeof selectRecipe> & {
    children?: ChildrenTypes
  };