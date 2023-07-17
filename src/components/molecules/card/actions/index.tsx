import React from 'react';
import { cx } from '@datalitiks/datalitiks-ui/css';
import { styled } from '@datalitiks/datalitiks-ui/jsx';
import { CardActionsProps, cardActionsRecipe } from './card.actions.recipe';

export const CardActions = ({
  color,
  size,
  className,
  children,
  ...props
}: CardActionsProps) => {
  return (
    <styled.button
      {...props}
      className={cx(cardActionsRecipe({ color, size }), className)}>
      {children}
    </styled.button>
  );
};
