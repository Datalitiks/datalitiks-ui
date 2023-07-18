import { cva, type RecipeVariantProps } from '@datalitiks/datalitiks-ui/css'
import { HTMLStyledProps } from '@datalitiks/datalitiks-ui/jsx';
import { ChildrenTypes } from '@/types/common';

export const cardRecipe = cva({
  base: {
    borderWidth: '1px',
    borderRadius: '10px',
    padding: 6,
    maxWidth: '388px',
    boxShadow: '5px 5px 3px 0px rgba(0,0,0,0.25)'
  },
  variants: {
    color: {
      primary: {
        color: 'primary.50',
        bg: 'primary.500',
        borderColor: 'primary.800',
      },
      secondary: {
        color: 'secondary.50',
        bg: 'secondary.500',
        borderColor: 'secondary.800',
      },
    },
    shape: {
      square: { rounded: 'none' },
      semi: { rounded: '10px' },
      rounded: { rounded: 'full' },
    },
    size: {
      xs: {
        paddingLeft: '3',
        paddingRight: '3',
        paddingTop: '1',
        paddingBottom: '1',
      },
      sm: {
        paddingLeft: '4',
        paddingRight: '4',
        paddingTop: '2',
        paddingBottom: '2',
      },
      md: {
        paddingLeft: '6',
        paddingRight: '6',
        paddingTop: '3',
        paddingBottom: '3',
      },
      lg: {
        paddingLeft: '8',
        paddingRight: '8',
        paddingTop: '4',
        paddingBottom: '4',
      },
      xl: {
        paddingLeft: '14',
        paddingRight: '14',
        paddingTop: '5',
        paddingBottom: '5',
      }
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    shape: 'semi'
  }
})

export type CardProps = HTMLStyledProps<'div'> &
  RecipeVariantProps<typeof cardRecipe> & {
    children?: ChildrenTypes
  };
