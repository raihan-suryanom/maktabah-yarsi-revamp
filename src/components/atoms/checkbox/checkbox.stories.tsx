import { Checkbox, Label } from '~/components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof meta>;

export default meta;

export const DefaultCheckbox: Story = {};

export const CheckboxWithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="example" />
      <Label htmlFor="example">This is a label</Label>
    </div>
  ),
};
