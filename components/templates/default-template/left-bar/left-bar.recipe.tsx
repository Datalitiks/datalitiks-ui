import { cva, type RecipeVariantProps } from '@datalitiks/styled-system/css';
import { HTMLStyledProps } from '@datalitiks/styled-system/jsx';
import {ChildrenTypes} from "../../../../types/common";

export const defaultTemplateLeftBarRecipe = cva({
    base: {
        gridArea: 'leftBar',
    }
});

export type DefaultTemplateLeftBarProps = HTMLStyledProps<'nav'> &
    RecipeVariantProps<typeof defaultTemplateLeftBarRecipe> & {
        children?: ChildrenTypes
    };
