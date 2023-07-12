'use client';
import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { DefaultTemplateProps, defaultTemplateRecipe } from './default-template.recipe';

export const DefaultTemplate = ({
    className,
    children,
    ...props
}: DefaultTemplateProps) => {
    return (
        <styled.main
            {...props}
            className={cx(defaultTemplateRecipe({}), className)}>
            {children}
        </styled.main>
    );
};
