
import { type RecipeVariantProps, cva } from '@/styled-system/css';
import { HTMLStyledProps } from '@/styled-system/jsx';
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
