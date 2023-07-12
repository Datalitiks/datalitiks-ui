import { cva, type RecipeVariantProps } from '@/styled-system/css';
import { HTMLStyledProps } from '@/styled-system/jsx';

export const buttonRecipe = cva({
    base: {
        display: 'inline-block',
        cursor: 'pointer',
        color: 'white',
        textAlign: 'center',
        bg: 'blue.500'
    },
    variants: {
        color: {
            primary: {
                bg: '#F77770',
                borderColor: 'red.800',
                _hover: { bg: 'red.700' },
                _focus: { bg: 'red.700' }
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
            css: { borderWidth: '4px', borderColor: 'black' }
        },
        {
            color: 'secondary',
            size: 'sm',
            css: { borderWidth: '4px', borderColor: 'red' }
        }
    ],
    defaultVariants: {
        color: 'primary',
        size: 'sm'
    }
});

export type ButtonProps = HTMLStyledProps<'button'> &
    RecipeVariantProps<typeof buttonRecipe> & {
        children: React.ReactNode;
    };
