import SearchButton from './search-button.component';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/SearchButton',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultDialog: Story = {};
