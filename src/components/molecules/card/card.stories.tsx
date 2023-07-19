/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Story } from '@ladle/react';
import { Card } from '.';
export const card: Story = ({ children, ...props }: any) => {
  return (
    <Card {...props}>
      {children}
      <Card.Header>Datalitiks UI</Card.Header>
      <Card.Content>Explore the magic of Datalitiks-UI, where stories ignite and imagination soars. Embark on a boundless journey through
        knowledge and inspiration.
      </Card.Content>
      <Card.Actions>Buy me a Coffee</Card.Actions>
    </Card>
  )
};

export default {
  title: 'Molecules/Card',
}


card.argTypes = {
  width: {
    control: { type: 'select' },
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
    defaultValue: 'md'
  }
};
