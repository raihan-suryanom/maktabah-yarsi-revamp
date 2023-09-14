import { SearchInput } from '~/components/molecules';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallInput: Story = {
  args: {
    placeholder: 'Small Input',
    dimension:'small'
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
  },
};
