
import { type RecipeVariantProps, cva } from '@datalitiks/datalitiks-ui/css';
import { HTMLStyledProps } from '@datalitiks/datalitiks-ui/jsx';
import { ChildrenTypes } from '@/types/common';

export const defaultTemplateRightBarRecipe = cva({
    base: {
        gridArea: 'rightBar',
    }
});

export type DefaultTemplateRightBarProps = HTMLStyledProps<'aside'> &
    RecipeVariantProps<typeof defaultTemplateRightBarRecipe> & {
        children?: ChildrenTypes
    };
