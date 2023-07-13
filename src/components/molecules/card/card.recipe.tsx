import { cva, type RecipeVariantProps } from '@/styled-system/css'
import { HTMLStyledProps } from '@/styled-system/jsx';

export const cardRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    textAlign: 'center',
    borderWidth: '1px',
    fontWeight: '600'
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
      rounded: { rounded: 'full' },
    },
    size: {
      xs: {
        paddingLeft: '3',
        paddingRight: '3',
        paddingTop: '1',
        paddingBottom: '1',
        fontSize: 'sm'
      },
      sm: {
        paddingLeft: '4',
        paddingRight: '4',
        paddingTop: '2',
        paddingBottom: '2',
        fontSize: 'sm'
      },
      md: {
        paddingLeft: '6',
        paddingRight: '6',
        paddingTop: '3',
        paddingBottom: '3',
        fontSize: 'md'
      },
      lg: {
        paddingLeft: '8',
        paddingRight: '8',
        paddingTop: '4',
        paddingBottom: '4',
        fontSize: 'lg'
      },
      xl: {
        paddingLeft: '14',
        paddingRight: '14',
        paddingTop: '5',
        paddingBottom: '5',
        fontSize: 'lg'
      }
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    shape: 'rounded'
  }
})

export type CardProps = HTMLStyledProps<'card'> &
  RecipeVariantProps<typeof cardRecipe> & {
    children: React.ReactNode;
  };