import React from 'react';
import { cx } from '@datalitiks/styled-system/css';
import { styled } from '@datalitiks/styled-system/jsx';
import { CardProps, cardRecipe } from './card.recipe';
import { CardHeader } from './header';
import { CardContent } from './content';
import { CardActions } from './actions/';


export const Card = ({
  color,
  size,
  className,
  children,
  ...props
}: CardProps) => {
  return (
    <styled.div
      {...props}
      className={cx(cardRecipe({ size, color }), className)}>
      {children}
    </styled.div>
  );
};

Card.Header = CardHeader
Card.Content = CardContent
Card.Actions = CardActions




