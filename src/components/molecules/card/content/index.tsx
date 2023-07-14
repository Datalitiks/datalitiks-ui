'use client';
import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { CardContentProps, cardContentRecipe } from './card.content.recipe';

export const CardContent = ({
  color,
  className,
  ...props
}: CardContentProps) => {
  return (
    <styled.div
      {...props}
      className={cx(cardContentRecipe({ color }), className)}>
    </styled.div>
  );
};