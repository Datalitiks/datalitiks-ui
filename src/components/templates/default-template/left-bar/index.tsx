'use client';
import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { DefaultTemplateLeftBarProps, defaultTemplateLeftBarRecipe } from './left-bar.recipe';

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
