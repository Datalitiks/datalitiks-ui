import { cva, type RecipeVariantProps } from '@datalitiks/datalitiks-ui/css';
import { HTMLStyledProps } from '@datalitiks/datalitiks-ui/jsx';
import { ChildrenTypes } from '@/types/common';

export const defaultTemplateMainRecipe = cva({
    base: {
        gridArea: 'main',
    }
});

export type DefaultTemplateMainProps = HTMLStyledProps<'aside'> &
    RecipeVariantProps<typeof defaultTemplateMainRecipe> & {
        children?: ChildrenTypes
    };
