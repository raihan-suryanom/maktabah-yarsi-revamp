import { Pagination } from '~/components/molecules';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultPagination: Story = {};
