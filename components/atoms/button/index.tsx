import React from 'react';
import { styled } from '@datalitiks/styled-system/jsx';
import { cx } from "@datalitiks/styled-system/css";
import { ButtonProps, buttonRecipe } from "./button.recipe";

export const Button = ({
                         color,
                         size,
                         className,
                         children,
                         ...props
                       }: ButtonProps) => {
  return (
    <styled.button {...props} type="button" className={cx(buttonRecipe({ color, size }), className)}>
      {children}
    </styled.button>
  )
}
