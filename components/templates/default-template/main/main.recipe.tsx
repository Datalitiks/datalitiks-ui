import { cva, type RecipeVariantProps } from '@datalitiks/styled-system/css';
import { HTMLStyledProps } from '@datalitiks/styled-system/jsx';
import {ChildrenTypes} from "../../../../types/common";

export const defaultTemplateMainRecipe = cva({
    base: {
        gridArea: 'main',
    }
});

export type DefaultTemplateMainProps = HTMLStyledProps<'aside'> &
    RecipeVariantProps<typeof defaultTemplateMainRecipe> & {
        children?: ChildrenTypes
    };
