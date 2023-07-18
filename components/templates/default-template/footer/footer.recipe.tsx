import { cva, type RecipeVariantProps } from '../../../../styled-system/css';
import { HTMLStyledProps } from '../../../../styled-system/jsx';
import {ChildrenTypes} from "../../../../types/common";
export const defaultTemplateFooterRecipe = cva({
    base: {
        gridArea: 'footer',
    }
});

export type DefaultTemplateFooterProps = HTMLStyledProps<'footer'> &
    RecipeVariantProps<typeof defaultTemplateFooterRecipe> & {
        children?: ChildrenTypes
    };
