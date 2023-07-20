import React from 'react';
import { cx } from '../../../../styled-system/css';
import { styled } from '../../../../styled-system/jsx';
import { CardHeaderProps, cardHeaderRecipe } from './card.header.recipe';

export const CardHeader = ({
  color,
  size,
  className,
  children,
  ...props
}: CardHeaderProps) => {
  return (
    <styled.h2
      {...props}
      className={cx(cardHeaderRecipe({ color, size }), className)}>
      {children}
    </styled.h2>
  );
};
