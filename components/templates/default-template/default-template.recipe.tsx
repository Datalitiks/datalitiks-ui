
import { cva, type RecipeVariantProps } from '@datalitiks/datalitiks-ui/css';
import { HTMLStyledProps } from '@datalitiks/datalitiks-ui/jsx';
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
