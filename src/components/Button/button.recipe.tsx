import { cva, type RecipeVariantProps } from '@/styled-system/css';

export const buttonRecipe = cva({
    base: {
        display: 'flex',
        cursor: 'pointer',
        color: 'white',
        textAlign: 'center'
    },
    variants: {
        visual: {
            primary: {
                bg: '#F77770',
                borderColor: 'red.700',
                _hover: { bg: 'red.700' },
                _focus: { bg: 'red.700' }
            },
            secondary: {
                bg: '#072F33',
                borderColor: 'blue.700',
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
            visual: 'primary',
            size: 'lg',
            css: { borderWidth: '4px', borderColor: 'black' }
        },
        {
            visual: 'secondary',
            size: 'sm',
            css: { borderWidth: '4px', borderColor: 'red' }
        }
    ],
    defaultVariants: {
        visual: 'primary',
        size: 'sm'
    }
});

export type ButtonVariants = RecipeVariantProps<typeof buttonRecipe>;
