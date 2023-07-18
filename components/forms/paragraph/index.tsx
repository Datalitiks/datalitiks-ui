import React from 'react';
import { styled } from '../../../styled-system/jsx';
import { cx } from "../../../styled-system/css";
import { ParagraphProps, paragraphRecipe } from './paragraph.recipe';

export const Paragraph = ({
  color,
  size,
  className,
  children,
  ...props
}: ParagraphProps) => {
  return (
    <styled.p
      {...props}
      className={cx(paragraphRecipe({ color, size }), className)}>
      {children}
    </styled.p>
  );
};
