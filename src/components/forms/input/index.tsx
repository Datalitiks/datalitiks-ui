'use client';
import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { InputProps, inputRecipe } from './input.recipe';

export const Input = ({
  color,
  size,
  className,
  children,
  ...props
}: InputProps) => {
  return (
    <styled.input
      {...props}
      className={cx(inputRecipe({ color, size }), className)}>
      {children}
    </styled.input>
  );
};
