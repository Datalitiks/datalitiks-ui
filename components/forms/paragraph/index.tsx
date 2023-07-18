import React from 'react';
import { styled } from '@datalitiks/datalitiks-ui/jsx';
import { cx } from "@datalitiks/datalitiks-ui/css";
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