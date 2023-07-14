import type { Story } from '@ladle/react';
import { CardContent } from '.';
export const cardContent: Story = ({ children, ...props }: any) => {
    return <CardContent {...props}>{children}</CardContent>;
};

cardContent.args = {
    children: 'My Card Text',
    disabled: false
};

cardContent.argTypes = {
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