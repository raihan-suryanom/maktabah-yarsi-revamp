import Pagination from '~/components/molecules/pagination';

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
