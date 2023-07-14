'use client';
import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { ButtonProps, buttonRecipe } from './button.recipe';

export const Button = ({
    color,
    size,
    className,
    children,
    ...props
}: ButtonProps) => {
    return (
        <styled.button
            {...props}
            type='button'
            className={cx(buttonRecipe({ color, size }), className)}>
            {children}
        </styled.button>
    );
};
