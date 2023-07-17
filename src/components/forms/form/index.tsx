'use client';
import { cx } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { FormProps, formRecipe } from './form.recipe';

export const Form = ({
  color,
  size,
  className,
  children,
  ...props
}: FormProps) => {
  return (
    <styled.form
      {...props}
      className={cx(formRecipe({ size, color }), className)}>
      {children}
    </styled.form>
  );
};