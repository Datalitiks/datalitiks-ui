'use client';
import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { CardProps, cardRecipe } from './card.recipe';

export const Card = ({
  color,
  size,
  className,
  children,
  ...props
}: CardProps) => {
  return (
    <styled.card
      {...props}
      type='card'
      className={cx(cardRecipe({ color, size }), className)}>
      {children}
    </styled.card>
  );
};