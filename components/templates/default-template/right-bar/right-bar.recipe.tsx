
import { type RecipeVariantProps, cva } from '@datalitiks/styled-system/css';
import { HTMLStyledProps } from '@datalitiks/styled-system/jsx';
import {ChildrenTypes} from "../../../../types/common";

export const defaultTemplateRightBarRecipe = cva({
    base: {
        gridArea: 'rightBar',
    }
});

export type DefaultTemplateRightBarProps = HTMLStyledProps<'aside'> &
    RecipeVariantProps<typeof defaultTemplateRightBarRecipe> & {
        children?: ChildrenTypes
    };
