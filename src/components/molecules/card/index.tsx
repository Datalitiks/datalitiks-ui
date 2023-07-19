import React from 'react';
import { cx } from '@datalitiks/datalitiks-ui/css';
import { styled } from '@datalitiks/datalitiks-ui/jsx';
import { CardProps, cardRecipe } from './card.recipe';
import { CardHeader } from './header';
import { CardContent } from './content';
import { CardActions } from './actions/';


export const Card = ({
  color,
  size,
  shape,
  className,
  children,
  ...props
}: CardProps) => {
  return (
    <styled.div
      {...props}
      className={cx(cardRecipe({ size, color, shape }), className)}>
      {children}
    </styled.div>
  );
};

Card.Header = CardHeader
Card.Content = CardContent
Card.Actions = CardActions




