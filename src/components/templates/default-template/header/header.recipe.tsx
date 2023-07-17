import React from 'react';
import { cva, type RecipeVariantProps } from '@datalitiks/datalitiks-ui/css';
import { HTMLStyledProps } from '@datalitiks/datalitiks-ui/jsx';
import { ChildrenTypes } from '@/types/common';

export const defaultTemplateHeaderRecipe = cva({
    base: {
        gridArea: 'header',
    }
});

export type DefaultTemplateHeaderProps = HTMLStyledProps<'header'> &
    RecipeVariantProps<typeof defaultTemplateHeaderRecipe> & {
        children?: ChildrenTypes
    };
