import type { Story } from '@ladle/react';
import { CardHeader } from '.';
export const cardHeader: Story = ({ children, ...props }: any) => {
    return <CardHeader {...props}>{children}</CardHeader>;
};

cardHeader.args = {
    children: 'My Card Text',
    disabled: false
};

cardHeader.argTypes = {
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
