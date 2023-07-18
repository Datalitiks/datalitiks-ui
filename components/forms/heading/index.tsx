import React from 'react';
import { styled } from '@/styled-system/jsx';
import { cx } from "@/styled-system/css";
import { HeadingProps, headingRecipe } from './heading.recipe';

export const Heading = ({
  color,
  size,
  className,
  children,
  ...props
}: HeadingProps) => {
  return (
    <styled.h2
      {...props}
      className={cx(headingRecipe({ color, size }), className)}>
      {children}
    </styled.h2>
  );
};
