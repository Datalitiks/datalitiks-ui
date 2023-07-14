import { cva, type RecipeVariantProps } from '@/styled-system/css';
import { HTMLStyledProps } from '@/styled-system/jsx';
import { ChildrenTypes } from '@/types/common';

export const defaultTemplateRecipe = cva({
    base: {
        display: 'grid',
        gridTemplateAreas: "'leftBar header rightBar' 'leftBar main rightBar' 'footer footer footer'",
        gridTemplateColumns: 'auto 1fr auto',
        gridTemplateRows: 'auto 1fr auto',
    }
});

export type DefaultTemplateProps = HTMLStyledProps<'div'> &
    RecipeVariantProps<typeof defaultTemplateRecipe> & {
        children: ChildrenTypes
    };
