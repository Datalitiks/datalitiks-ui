/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Story } from '@ladle/react';
import { DefaultTemplate } from '.';
import { Box } from '../../../styled-system/jsx';
export const defaultTemplate: Story = ({ children, ...props }: any) => {
    return (
        <DefaultTemplate {...props} css={{ height: 'full' }}>
            <DefaultTemplate.LeftBar>
                <Box css={{ background: 'gray.200', height: 'full', padding: '8' }}>
                    Left side
                </Box>
            </DefaultTemplate.LeftBar>
            <DefaultTemplate.Header>
                <Box css={{ background: 'gray.100', height: 'full', padding: '8' }}>
                        Header
                </Box>
            </DefaultTemplate.Header>
            <DefaultTemplate.Main>{children}</DefaultTemplate.Main>
            <DefaultTemplate.Footer>
                <Box css={{ background: 'gray.100', height: 'full', padding: '8' }}>
                        Footer
                </Box>
            </DefaultTemplate.Footer>
            <DefaultTemplate.RightBar>
                <Box css={{ background: 'gray.200', height: 'full', padding: '8' }}>
                        Right side
                </Box>
            </DefaultTemplate.RightBar>
        </DefaultTemplate>
    )
}

export default {
  title: 'Templates/Default',
}


defaultTemplate.args = {
    children: 'My DefaultTemplate',
}
