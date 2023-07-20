import { cva, type RecipeVariantProps } from '@datalitiks/styled-system/css'
import { HTMLStyledProps } from '@datalitiks/styled-system/jsx';
import {ChildrenTypes} from "../../../types/common";

export const labelRecipe = cva({
  base: {
    color: 'brand.300',
    fontWeight: '100'
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

export type LabelProps = HTMLStyledProps<'label'> &
  RecipeVariantProps<typeof labelRecipe> & {
    children?: ChildrenTypes
  };
