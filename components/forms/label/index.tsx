import React from 'react';
import { styled } from '../../../styled-system/jsx';
import { cx } from "../../../styled-system/css";
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
