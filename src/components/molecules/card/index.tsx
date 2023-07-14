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
    <styled.div
      {...props}
      className={cx(cardRecipe({ size, color }), className)}>
      {children}
    </styled.div>
  );
};



