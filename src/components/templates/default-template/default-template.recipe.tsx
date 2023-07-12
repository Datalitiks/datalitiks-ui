import { cva, type RecipeVariantProps } from '@/styled-system/css';
import { HTMLStyledProps } from '@/styled-system/jsx';

export const defaultTemplateRecipe = cva({
    base: {
        display: 'grid',
        gridTemplateAreas: '"header" "main" "footer"'
    }
});

export type DefaultTemplateProps = HTMLStyledProps<'div'> &
    RecipeVariantProps<typeof defaultTemplateRecipe> & {
        children: React.ReactNode;
    };
