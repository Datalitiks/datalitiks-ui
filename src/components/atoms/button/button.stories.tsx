/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Story } from '@ladle/react';
import { Button } from '.';
export const button: Story = ({ children, ...props }: any) => {
    return <Button {...props}>{children}</Button>;
};

button.args = {
    children: 'My Button',
    disabled: false
};

button.argTypes = {
    color: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'warning', 'danger', 'success'],
        defaultValue: 'primary'
    },
    size: {
        control: { type: 'select' },
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
        defaultValue: 'md'
    }
};
