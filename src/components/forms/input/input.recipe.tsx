import { cva, type RecipeVariantProps } from '@/styled-system/css'
import { HTMLStyledProps } from '@/styled-system/jsx';
import { ChildrenTypes } from '@/types/common';

export const inputRecipe = cva({
  base: {
    width: '100%',
    padding: '1',
    margin: '5px 0 20px',
    borderRadius: '5px',
    _placeholder: { 
      color: 'brand.300',
      opacity: '50%',
      fontWeight: '300',
      paddingLeft: '5px' 
    }
  },
  variants: {
    color: {},
    size: {
      xs: {
        fontSize: 'sm',
        fontWeight: '100',
      },
      sm: {
        fontSize: 'sm',
        fontWeight: '300',
      },
      md: {
        fontSize: 'md',
        fontWeight: '500',
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

export type InputProps = HTMLStyledProps<'input'> &
  RecipeVariantProps<typeof inputRecipe> & {
    children?: ChildrenTypes
  };