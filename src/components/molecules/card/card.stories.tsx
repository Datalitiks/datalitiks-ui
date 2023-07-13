/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Story } from '@ladle/react';
import { Card } from '.';
export const card: Story = ({ children, ...props }: any) => {
    return <Card {...props}>{children}</Card>;
};

card.args = {
    children: 'My Card Text',
    disabled: false
};

card.argTypes = {
    color: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'warning', 'danger', 'success'],
        defaultValue: 'primary'
    },
    shape: {
        control: { type: 'select' },
        options: ['rounded', 'square'],
        defaultValue: 'rounded'
    },
    size: {
        control: { type: 'select' },
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
        defaultValue: 'md'
    }
};