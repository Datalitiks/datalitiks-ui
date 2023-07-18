import React from 'react';
import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
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
