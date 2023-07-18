/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Story } from '@ladle/react';
import { Form } from '.';
import { styled } from '@/styled-system/jsx';
import { Box } from '@/styled-system/jsx';
import { Button, Heading, Label, Input, Select, Textarea, Paragraph } from '@/components';


export const form: Story = ({ children, ...props }: any) => {
  return (
    <Form {...props}>
      {children}
      <Heading>We'd love to help</Heading>
      <Paragraph>reach out and we'll get in touch within 24 hours.</Paragraph>
      <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box css={{ maxWidth: '45%' }}>
          <Label>First Name</Label>
          <Input placeholder='First Name' />
        </Box>
        <Box css={{ maxWidth: '45%' }}>
          <Label>Last Name</Label>
          <Input placeholder='Last Name' />
        </Box>
      </Box>
      <Box>
        <Label>Email Address</Label>
        <Input placeholder='Email Address' />
      </Box>
      <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box css={{ maxWidth: '45%' }}>
          <Label>Team size</Label>
          <Select>
            <option>1 - 50 people</option>
            <option>51 - 99 people</option>
            <option>+ 100 people</option>
          </Select>
        </Box>
        <Box css={{ maxWidth: '45%' }}>
          <Label>Location</Label>
          <Select>
            <option>Europe</option>
            <option>Asia</option>
            <option>America</option>
            <option>Africa</option>
            <option>Oceania</option>
          </Select>
        </Box>
      </Box>
      <Label>Message</Label>
      <Textarea placeholder='Leave us a message...' />
      <Box css={{ display: 'flex' }}>
        <Input css={{ width: '20px !important', height: '20px' }} type="checkbox" />
        <styled.p color='brand.300' fontWeight='300' margin="3px 10px">I agree with&nbsp;
          <styled.a textDecoration='underline' href="#">Terms and Conditions</styled.a>
        </styled.p>
      </Box>
      <Box css={{ display: 'flex' }}>
        <Button width='100%'>Send message</Button>
      </Box>
    </Form >
  )
};

form.argTypes = {
  width: {
    control: { type: 'select' },
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
    defaultValue: 'md'
  }
};