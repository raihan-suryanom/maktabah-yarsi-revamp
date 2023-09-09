import dynamicIconImports from 'lucide-react/dynamicIconImports';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '~/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    withIcon: {
      control: 'select',
      options: Object.keys(dynamicIconImports),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultInput: Story = {};

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
