import dynamicIconImports from 'lucide-react/dynamicIconImports';

import { Icon } from '~/components';

import type { Meta, StoryObj } from '@storybook/react';

const meta =  {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(dynamicIconImports),
    },
    size: {
      control: { type: 'range', min: 16, max: 48, step: 4 },
    },
    strokeWidth: {
      control: { type: 'range', min: 0.5, max: 3, step: 0.25 },
    },
    absoluteStrokeWidth: {
      control: 'boolean',
    },
    color: {
      control: { type: 'color' },
    },
  },
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof meta>;

export default meta;

export const DefaultIcon: Story = {
  args: {
    name: 'library',
    size: 28,
  },
};
