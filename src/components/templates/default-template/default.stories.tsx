/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Story } from '@ladle/react';
import { DefaultTemplate } from '.';
export const defaultTemplate: Story = ({ children, ...props }: any) => {
    return <DefaultTemplate {...props}>{children}</DefaultTemplate>;
}

defaultTemplate.args = {
    children: 'My DefaultTemplate',
}