/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Story } from '@ladle/react';
import { Form } from '.';
import { Label } from '../label';
import { Input } from '../input';
import { Select } from '../select';
import { Textarea } from '../textarea';
export const form: Story = ({ children, ...props }: any) => {
  return (
    <Form {...props} css={{ height: 'auto', width: '300px', minHeight: '300px' }}>
      {children}
      <Label>Input</Label>
      <Input placeholder='Type your name'/>
      <Label>Select</Label>
      <Select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Select>
      <Label>Message</Label>
       <Textarea placeholder='Write something...' />
    </Form>
  )
};

form.argTypes = {
  width: {
    control: { type: 'select' },
    options: ['xs', 'sm', 'md', 'lg', 'xl'],
    defaultValue: 'md'
  }
};