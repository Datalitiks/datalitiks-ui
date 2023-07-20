import { cva, type RecipeVariantProps } from '@datalitiks/styled-system/css';
import { HTMLStyledProps } from '@datalitiks/styled-system/jsx';
import {ChildrenTypes} from "../../../../types/common";

export const defaultTemplateHeaderRecipe = cva({
    base: {
        gridArea: 'header',
    }
});

export type DefaultTemplateHeaderProps = HTMLStyledProps<'header'> &
    RecipeVariantProps<typeof defaultTemplateHeaderRecipe> & {
        children?: ChildrenTypes
    };
