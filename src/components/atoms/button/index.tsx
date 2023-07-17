import React from 'react';
import { styled } from '@datalitiks/datalitiks-ui/jsx';
import { cx } from "@datalitiks/datalitiks-ui/css";
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
