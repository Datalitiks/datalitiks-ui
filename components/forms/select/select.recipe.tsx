import { cva, type RecipeVariantProps } from '@datalitiks/styled-system/css'
import { HTMLStyledProps } from '@datalitiks/styled-system/jsx';
import {ChildrenTypes} from "../../../types/common";

export const selectRecipe = cva({
  base: {
    display: 'block',
    padding: '1',
    width: '100%',
    borderRadius: '5px',
    margin: '5px 0 20px',
    color: 'primary.900',

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

export type SelectProps = HTMLStyledProps<'select'> &
  RecipeVariantProps<typeof selectRecipe> & {
    children?: ChildrenTypes
  };
