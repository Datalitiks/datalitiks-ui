import React from 'react';
import { cx } from '@datalitiks/datalitiks-ui/css';
import { styled } from '@datalitiks/datalitiks-ui/jsx';
import { type DefaultTemplateMainProps, defaultTemplateMainRecipe } from './main.recipe';

export const DefaultTemplateMain = ({
    className,
    children,
    ...props
}: DefaultTemplateMainProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return (
        <styled.main
            {...props}
            className={cx(defaultTemplateMainRecipe({}), className)}>
            {children}
        </styled.main>
    );
};
