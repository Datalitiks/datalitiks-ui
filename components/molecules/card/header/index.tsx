import React from 'react';
import { cx } from '@datalitiks/styled-system/css';
import { styled } from '@datalitiks/styled-system/jsx';
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

