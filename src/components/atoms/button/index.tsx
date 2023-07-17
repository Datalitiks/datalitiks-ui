'use client';
import { styled } from '@/styled-system/jsx';
import { ButtonProps, buttonRecipe } from "./button.recipe";
import { cx } from "@/styled-system/css";

export const Button = ({
                         color,
                         size,
                         className,
                         label,
                         ...props
                       }: ButtonProps & {
  label: string
}) => {
  return (
    <styled.button {...props} type="button" className={cx(buttonRecipe({ color, size }), className)}>
      {label}
    </styled.button>
  )
}
