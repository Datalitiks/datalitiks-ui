import type { Story } from '@ladle/react';
import { CardActions } from '.';
export const cardActions: Story = ({ children, ...props }: any) => {
    return <CardActions {...props}>{children}</CardActions>;
};

cardActions.args = {
    children: 'My Card Text',
    disabled: false
};

cardActions.argTypes = {
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