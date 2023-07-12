import type { Story } from '@ladle/react';
import { Button } from '.';
import '../../style.css';
export const button: Story = (props) => <Button {...props}>Button</Button>;

button.args = {
    color: 'primary',
    size: 'sm'
};

button.argTypes = {
    color: {
        control: { type: 'select', options: ['primary', 'secondary'] }
    },
    size: {
        control: { type: 'select', options: ['sm', 'lg'] }
    }
};
