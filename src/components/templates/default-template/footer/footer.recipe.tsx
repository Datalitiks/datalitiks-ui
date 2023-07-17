import { cva, type RecipeVariantProps } from '@datalitiks/datalitiks-ui/css';
import { HTMLStyledProps } from '@datalitiks/datalitiks-ui/jsx';
import { ChildrenTypes } from '@/types/common';

export const defaultTemplateFooterRecipe = cva({
    base: {
        gridArea: 'footer',
    }
});

export type DefaultTemplateFooterProps = HTMLStyledProps<'footer'> &
    RecipeVariantProps<typeof defaultTemplateFooterRecipe> & {
        children?: ChildrenTypes
    };
