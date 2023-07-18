import React from 'react';
import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { SelectProps, selectRecipe } from './select.recipe';

export const Select = ({
  color,
  size,
  className,
  children,
  ...props
}: SelectProps) => {
  return (
    <styled.select
      {...props}
      className={cx(selectRecipe({ color, size }), className)}>
      {children}
    </styled.select>
  );
};
