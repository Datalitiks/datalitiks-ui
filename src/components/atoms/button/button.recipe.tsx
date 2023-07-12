import { cva, type RecipeVariantProps } from '@/styled-system/css';
import { HTMLStyledProps } from '@/styled-system/jsx';

export const buttonRecipe = cva({
    base: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        textAlign: 'center',
        borderWidth: '1px'
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
                bg: '#072F33',
                borderColor: 'blue.800',
                _hover: { bg: 'blue.700' },
                _focus: { bg: 'blue.700' }
            }
        },
        shape: {
            rounded: { borderRadius: 'xl' }
        },
        size: {
            xs: { padding: '1', fontSize: '8px' },
            sm: { padding: '4', fontSize: '12px' },
            md: { padding: '6', fontSize: '16px' },
            lg: { padding: '8', fontSize: '24px' },
            xl: { padding: '12', fontSize: '32px' }
        }
    },
    defaultVariants: {
        color: 'primary',
        size: 'md'
    }
});

export type ButtonProps = HTMLStyledProps<'button'> &
    RecipeVariantProps<typeof buttonRecipe> & {
        children: React.ReactNode;
    };
