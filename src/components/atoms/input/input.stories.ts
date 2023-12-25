import Input from '~/components/atoms/input';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;

export default meta;

export const SmallInput: Story = {
  args: {
    placeholder: 'Small Input',
    dimension: 'small',
    className: 'rounded-none',
  },
};

export const MediumInput: Story = {
  args: {
    placeholder: 'Medium Input',
  },
};

export const WideMediumInput: Story = {
  args: {
    placeholder: 'Cari nama buku, kategori, topik...',
    className: 'w-[992px]',
  },
};
