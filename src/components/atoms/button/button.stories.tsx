import type { Story } from '@ladle/react';
import { Button } from '.';
export const button: Story = (args) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { children, ...props } = args as any;
    return <Button {...props}>{children}</Button>;
};

button.args = {
    color: 'primary',
    size: 'sm',
    children: 'My Button'
};

button.argTypes = {
    color: {
        control: {
            type: 'select',
            options: ['primary', 'secondary', 'warning', 'danger', 'success']
        }
    },
    size: {
        control: {
            type: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl']
        }
    }
};
