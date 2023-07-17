/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Story } from '@ladle/react';
import { Card } from '.';
export const card: Story = ({ children, ...props }: any) => {
    return (
        <Card {...props} css={{ height: 'auto', width: '300px', minHeight: '300px' }}>
            {children}
            <Card.Header>Card-Header</Card.Header>
            <Card.Content>Card-Content: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </Card.Content>
            <Card.Actions>Card-Actions: Click</Card.Actions>
        </Card>
    )
};

card.argTypes = {
    width: {
        control: { type: 'select' },
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
        defaultValue: 'md'
    }
};