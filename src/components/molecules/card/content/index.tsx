import React from 'react';
import { cx } from '@datalitiks/datalitiks-ui/css';
import { styled } from '@datalitiks/datalitiks-ui/jsx';
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
