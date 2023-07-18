import React from 'react';
import { styled } from '@datalitiks/datalitiks-ui/jsx';
import { cx } from "@datalitiks/datalitiks-ui/css";
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
