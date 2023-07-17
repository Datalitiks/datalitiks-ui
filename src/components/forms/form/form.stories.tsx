/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Story } from '@ladle/react';
import { Form } from '.';
import { Label } from '../label';
import { Input } from '../input';
import { Select } from '../select';
import { Textarea } from '../textarea';
import { styled } from '@/styled-system/jsx';
import { Button } from '@/components';


export const form: Story = ({ children, ...props }: any) => {
  return (
    <Form {...props}>
      {children}
      <styled.h2 fontSize='25px' fontWeight='500' color='brand.500'>We'd love to help</styled.h2>
      <styled.p fontSize='15px' fontWeight='300' color='brand.300' marginBottom='30px'>reach out and we'll get in touch within 24 hours.</styled.p>
      <styled.div display='flex' justifyContent='space-between'>
        <styled.div maxWidth='45%'>
          <Label>First Name</Label>
          <Input placeholder='First Name' />
        </styled.div>
        <styled.div maxWidth='45%'>
          <Label>Last Name</Label>
          <Input placeholder='Last Name' />
        </styled.div>
      </styled.div>
      <div>
        <Label>Email Address</Label>
        <Input placeholder='Email Address' />
      </div>
      <styled.div display='flex' justifyContent='space-between'>
        <styled.div width='45%'>
          <Label>Team size</Label>
          <Select>
            <option>1 - 50 people</option>
            <option>51 - 99 people</option>
            <option>+ 100 people</option>
          </Select>
        </styled.div>
        <styled.div width='45%'>
          <Label>Location</Label>
          <Select>
            <option>Europe</option>
            <option>Asia</option>
            <option>America</option>
            <option>Africa</option>
            <option>Oceania</option>
          </Select>
        </styled.div>
      </styled.div>
      <Label>Message</Label>
      <Textarea placeholder='Leave us a message...' />
      <styled.div display='flex'>
        <Input css={{ width: '20px !important', height: '20px' }} type="checkbox" />
        <styled.p color='brand.300' fontWeight='300' margin="3px 10px">I agree with&nbsp;
          <styled.a textDecoration='underline' href="#">Terms and Conditions</styled.a>
        </styled.p>
      </styled.div>
      <styled.div display='flex'>
        <Button width='100%'>Send message</Button>
      </styled.div>
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