import React from 'react';
import { cx } from '@datalitiks/styled-system/css';
import { styled } from '@datalitiks/styled-system/jsx';
import { type DefaultTemplateLeftBarProps, defaultTemplateLeftBarRecipe } from './left-bar.recipe';

export const DefaultTemplateLeftBar = ({
    className,
    children,
    ...props
}: DefaultTemplateLeftBarProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (
        <styled.nav
            {...props}
            className={cx(defaultTemplateLeftBarRecipe({}), className)}>
            {children}
        </styled.nav>
    );
};
