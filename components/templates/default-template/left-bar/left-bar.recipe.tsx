import { cva, type RecipeVariantProps } from '@datalitiks/datalitiks-ui/css';
import { HTMLStyledProps } from '@datalitiks/datalitiks-ui/jsx';
import { ChildrenTypes } from '@/types/common';

export const defaultTemplateLeftBarRecipe = cva({
    base: {
        gridArea: 'leftBar',
    }
});

export type DefaultTemplateLeftBarProps = HTMLStyledProps<'nav'> &
    RecipeVariantProps<typeof defaultTemplateLeftBarRecipe> & {
        children?: ChildrenTypes
    };
