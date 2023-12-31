/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import type { Story } from '@ladle/react';
import { Button } from '.';
export const button: Story = ({ children, ...props }: any) => {
    return <Button {...props}>{children}</Button>;
};

export default {
    title: 'Atoms/Button',
}

button.args = {
    children: 'My Button Text',
    disabled: false
};

button.argTypes = {
    color: {
        control: { type: 'select' },
        options: ['brand', 'primary', 'secondary', 'warning', 'danger', 'success'],
        defaultValue: 'brand'
    },
    shape: {
        control: { type: 'select' },
        options: ['rounded', 'square', 'semi'],
        defaultValue: 'semi'
    },
    size: {
        control: { type: 'select' },
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
        defaultValue: 'md'
    }
};
