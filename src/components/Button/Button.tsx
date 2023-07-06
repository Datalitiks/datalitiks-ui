// export interface ButtonProps {
//     label: string;
// }

// const Button = (props: ButtonProps) => {
//     return <button>{props.label}</button>;
// };

// export default Button;

import { ButtonVariants, buttonRecipe } from './button.recipe';
import { ReactNode } from 'react';

type ButtonProps = ButtonVariants & {
    children: ReactNode;
};

export default function Button({ children, visual, size }: ButtonProps) {
    return (
        <button className={buttonRecipe({ visual, size })}>{children}</button>
    );
}
