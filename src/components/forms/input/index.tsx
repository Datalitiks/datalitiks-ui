import React from 'react';
import { styled } from '@datalitiks/datalitiks-ui/jsx';
import { cx } from "@datalitiks/datalitiks-ui/css";
import { InputProps, inputRecipe } from './input.recipe';

export const Input = ({
  size,
  className,
  children,
  ...props
}: InputProps) => {
  return (
    <styled.input
      {...props}
      className={cx(inputRecipe({ size }), className)}>
      {children}
    </styled.input>
  );
};
