import { cva, type RecipeVariantProps } from '@/styled-system/css';
import { HTMLStyledProps } from '@/styled-system/jsx';

export const buttonRecipe = cva({
    base: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        textAlign: 'center',
        borderWidth: '1px',
        fontWeight: '600',
        margin: '5px auto 15px'
    },
    variants: {
        color: {
            brand: {
                color: 'brand.50',
                bg: 'brand.500',
                borderColor: 'brand.500',
                _hover: {
                    bg: 'brand.400',
                    color: 'brand.50',
                    borderColor: 'brand.600'
                },
                _focus: {
                    bg: 'brand.300',
                    color: 'brand.50',
                    borderColor: 'brand.600'
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
        color: 'brand',
        size: 'md',
        shape: 'semi'
    }
});

export type ButtonProps = HTMLStyledProps<'button'> &
    RecipeVariantProps<typeof buttonRecipe> & {
        children: React.ReactNode;
    };
