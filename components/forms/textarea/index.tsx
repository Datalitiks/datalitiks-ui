import React from 'react';
import { styled } from '@datalitiks/datalitiks-ui/jsx';
import { cx } from "@datalitiks/datalitiks-ui/css";
import { TextareaProps, textareaRecipe } from './textarea.recipe';

export const Textarea = ({
  color,
  size,
  className,
  children,
  ...props
}: TextareaProps) => {
  return (
    <styled.textarea
      {...props}
      className={cx(textareaRecipe({ color, size }), className)}>
      {children}
    </styled.textarea>
  );
};
