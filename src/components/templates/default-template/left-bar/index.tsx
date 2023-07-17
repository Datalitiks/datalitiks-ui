import React from 'react';
import { cx } from '@datalitiks/datalitiks-ui/css';
import { styled } from '@datalitiks/datalitiks-ui/jsx';
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
