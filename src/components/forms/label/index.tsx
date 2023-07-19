import React from 'react';
import { styled } from '@datalitiks/datalitiks-ui/jsx';
import { cx } from "@datalitiks/datalitiks-ui/css";
import { LabelProps, labelRecipe } from './label.recipe';

export const Label = ({
  size, 
  className,
  children,
  ...props
}: LabelProps) => {
  return (
    <styled.label
      {...props}
      className={cx(labelRecipe({ size }), className)}>
      {children}
    </styled.label>
  );
};