import { Badge } from '~/components/atoms';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof meta>;

export default meta;

export const DefaultBadge: Story = {
  args: {
    children: 34,
  },
};

export const SecondaryBadge: Story = {
  args: {
    children: 99,
    variant: 'secondary',
  },
};

export const OutlineBadge: Story = {
  args: {
    children: 100,
    variant: 'outline',
  },
};
