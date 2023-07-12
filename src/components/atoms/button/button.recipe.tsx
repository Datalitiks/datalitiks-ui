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
                _hover: { bg: 'primary.400' },
                _focus: { bg: 'primary.300' },
                _disabled: { bg: 'primary.200', color: 'primary.800' },
                borderColor: 'primary.800'
            },
            secondary: {
                bg: '#072F33',
                borderColor: 'blue.800',
                _hover: { bg: 'blue.700' },
                _focus: { bg: 'blue.700' }
            }
        },
        size: {
            sm: { padding: '4', fontSize: '12px' },
            lg: { padding: '8', fontSize: '24px' }
        }
    },
    compoundVariants: [
        {
            color: 'primary',
            size: 'lg',
            css: { borderWidth: '4px' }
        },
        {
            color: 'secondary',
            size: 'sm',
            css: { borderWidth: '4px' }
        }
    ],
    defaultVariants: {
        color: 'primary',
        size: 'md'
    }
});

export type ButtonProps = HTMLStyledProps<'button'> &
    RecipeVariantProps<typeof buttonRecipe> & {
        children: React.ReactNode;
    };
