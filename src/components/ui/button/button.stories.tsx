import Link from 'next/link';

import { Button, Icon } from '~/components';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default meta;

export const DefaultButton: Story = {};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'secondary',
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    variant:'primary'
  },
};

export const Small: Story = {
  args: {
    children: '1',
    size: 'small',
    variant:'primary'
  },
};

export const TextWithIcon: Story = {
  args: {
    children: (
      <>
        Download
        <Icon name="download" />
      </>
    ),
    size: 'small',
    className: 'gap-1.5',
    variant:'primary'
  },
};

export const OnlyIcon: Story = {
  args: {
    children: <Icon className="cursor-pointer" name="lightbulb" size={40} />,
    asChild: true,
    size: 'small',
    variant:'primary'
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <Link href="#!">asChild</Link>,
    variant: 'link',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
