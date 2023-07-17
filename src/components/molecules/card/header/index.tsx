import React from 'react';
import { cx } from '@datalitiks/datalitiks-ui/css';
import { styled } from '@datalitiks/datalitiks-ui/jsx';
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

