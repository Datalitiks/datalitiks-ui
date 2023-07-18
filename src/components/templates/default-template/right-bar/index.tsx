import React from 'react';
import { cx } from '@datalitiks/datalitiks-ui/css';
import { styled } from '@datalitiks/datalitiks-ui/jsx';
import { type DefaultTemplateRightBarProps, defaultTemplateRightBarRecipe } from './right-bar.recipe';

export const DefaultTemplateRightBar = ({
    className,
    children,
    ...props
}: DefaultTemplateRightBarProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (
        <styled.aside
            {...props}
            className={cx(defaultTemplateRightBarRecipe({}), className)}>
            {children}
        </styled.aside>
    );
};
