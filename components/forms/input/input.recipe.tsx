import { cva, type RecipeVariantProps } from '@datalitiks/styled-system/css'
import { HTMLStyledProps } from '@datalitiks/styled-system/jsx';
import {ChildrenTypes} from "../../../types/common";

export const inputRecipe = cva({
  base: {
    borderRadius: '5px',
    color: 'primary.900',
    fontWeight: '400',
    margin: '5px 0 20px',
    padding: '1',
    paddingLeft: '2',
    width: '100%',
    _placeholder: {
      color: 'primary.900',
      fontWeight: '300',
    },
    _focus: {
      outlineColor: 'brand.500',
    },
  },
  variants: {
    color: {},
    size: {
      xs: {
        fontSize: 'sm',
      },
      sm: {
        fontSize: 'sm',
      },
      md: {
        fontSize: 'md',
      },
      lg: {
        fontSize: 'lg',
      },
      xl: {
        fontSize: 'lg',
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
