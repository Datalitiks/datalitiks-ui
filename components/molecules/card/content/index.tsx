import React from 'react';
import { cx } from '@datalitiks/styled-system/css';
import { styled } from '@datalitiks/styled-system/jsx';
import { CardContentProps, cardContentRecipe } from './card.content.recipe';

export const CardContent = ({
  color,
  className,
  ...props
}: CardContentProps) => {
  return (
    <styled.p
      {...props}
      className={cx(cardContentRecipe({ color }), className)}>
    </styled.p>
  );
};
