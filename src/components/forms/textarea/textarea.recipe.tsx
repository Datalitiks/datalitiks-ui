import { cva, type RecipeVariantProps } from '@/styled-system/css'
import { HTMLStyledProps } from '@/styled-system/jsx';
import { ChildrenTypes } from '@/types/common';

export const textareaRecipe = cva({
  base: {
    display: 'block',
    width: '100%',
    borderRadius: '5px',
    margin: '10px 0 20px',
    minHeight: '150px',
    paddingLeft: '2',
    _placeholder: {
      color: 'primary.900',
    }
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
        fontWeight: '200'
      },
      md: {
        fontSize: 'md',
        fontWeight: '300'
      },
      lg: {
        fontSize: 'lg',
        fontWeight: '400'
      },
      xl: {
        fontSize: 'lg',
        fontWeight: '500'
      }
    }
  },
  defaultVariants: {
    size: 'md',
  }
})

export type TextareaProps = HTMLStyledProps<'textarea'> &
  RecipeVariantProps<typeof textareaRecipe> & {
    children?: ChildrenTypes
  };