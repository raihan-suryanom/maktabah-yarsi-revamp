import { Breadcrumb } from '~/components/molecules';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

type Story = StoryObj<typeof meta>;

export default meta;

export const SmallInput: Story = {
  args: {
    paths: [],
    className: 'rounded-none',
  },
};

export const WideMediumInput: Story = {
  args: {
    paths: [],
    placeholder: 'Cari nama buku, kategori, topik...',
    className: 'w-[992px]',
  },
};
