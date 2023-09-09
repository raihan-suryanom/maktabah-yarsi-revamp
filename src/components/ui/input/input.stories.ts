import dynamicIconImports from 'lucide-react/dynamicIconImports';

import { Input } from '~/components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    withIcon: {
      control: 'select',
      options: Object.keys(dynamicIconImports),
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    placeholder: 'Default Input',
  },
};

export const LargeInput: Story = {
  args: {
    placeholder: 'Large Input',
  },
};

export const WideLargeInput: Story = {
  args: {
    placeholder: 'Cari nama buku, kategori, topik...',
    className: 'w-[992px]',
  },
};

export const InputWithIcon: Story = {
  args: {
    placeholder: 'Input with lucide icon',
    className: 'w-[992px]',
    withIcon: 'search',
  },
};
