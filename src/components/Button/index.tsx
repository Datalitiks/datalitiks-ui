import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { ButtonProps, buttonRecipe } from './button.recipe';
import { ReactNode } from 'react';

export const Button = ({
    color,
    size,
    className,
    children,
    ...props
}: ButtonProps & {
    children: ReactNode;
}) => {
    return (
        <styled.button
            {...props}
            type='button'
            className={cx(buttonRecipe({ color, size }), className)}>
            {children}
        </styled.button>
    );
};
