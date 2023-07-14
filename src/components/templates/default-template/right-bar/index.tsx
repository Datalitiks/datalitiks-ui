'use client';
import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { DefaultTemplateRightBarProps, defaultTemplateRightBarRecipe } from './right-bar.recipe';

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
