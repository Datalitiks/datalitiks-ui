import React from 'react';
import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { LabelProps, labelRecipe } from './label.recipe';

export const Label = ({
  color,
  size,
  className,
  children,
  ...props
}: LabelProps) => {
  return (
    <styled.label
      {...props}
      className={cx(labelRecipe({ color, size }), className)}>
      {children}
    </styled.label>
  );
};