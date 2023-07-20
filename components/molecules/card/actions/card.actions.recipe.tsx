import { cva, type RecipeVariantProps } from '@datalitiks/styled-system/css'
import { HTMLStyledProps } from '@datalitiks/styled-system/jsx';
import {ChildrenTypes} from "../../../../types/common";

export const cardActionsRecipe = cva({
  base: {
    display: 'flex',
    paddingLeft: '3',
    paddingRight: '3',
    paddingTop: '3',
    paddingBottom: '3',
    borderWidth: '1px',
    maxWidth: '200px',
    textAlign: 'center',
    margin: '20px auto 30px'
  },
  variants: {
    color: {
      primary: {
        color: 'primary.50',
        bg: 'primary.500',
        borderColor: 'primary.800',
        _hover: {
          bg: 'primary.400',
          color: 'primary.50',
          borderColor: 'primary.600'
        },
        _focus: {
          bg: 'primary.300',
          color: 'primary.50',
          borderColor: 'primary.600'
        },
        _disabled: {
          bg: 'gray.100',
          color: 'gray.800',
          borderColor: 'gray.200',
          cursor: 'not-allowed',
          _hover: {
            bg: 'gray.100',
            color: 'gray.800',
            borderColor: 'gray.200'
          },
          _focus: {
            bg: 'gray.100',
            color: 'gray.800',
            borderColor: 'gray.200'
          }
        }
      },
      secondary: {
        color: 'secondary.50',
        bg: 'secondary.500',
        borderColor: 'secondary.800',
        _hover: {
          bg: 'secondary.400',
          color: 'secondary.50',
          borderColor: 'secondary.600'
        },
        _focus: {
          bg: 'secondary.300',
          color: 'secondary.50',
          borderColor: 'secondary.600'
        },
        _disabled: {
          bg: 'gray.100',
          color: 'gray.800',
          borderColor: 'gray.200',
          cursor: 'not-allowed',
          _hover: {
            bg: 'gray.100',
            color: 'gray.800',
            borderColor: 'gray.200'
          },
          _focus: {
            bg: 'gray.100',
            color: 'gray.800',
            borderColor: 'gray.200'
          }
        }
      },
    },
    shape: {
      square: { rounded: 'none' },
      semi: { rounded: '10px' },
      rounded: { rounded: 'full' },
    },
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
    color: 'primary',
    size: 'md',
    shape: 'semi'
  }
})

export type CardActionsProps = HTMLStyledProps<'button'> &
  RecipeVariantProps<typeof cardActionsRecipe> & {
    children?: ChildrenTypes
  };
