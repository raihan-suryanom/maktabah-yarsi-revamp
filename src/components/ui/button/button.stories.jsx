import Link from 'next/link';

import { Button, Icon } from '~/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

export const Large = {
  args: {
    children: 'Large Button',
    variant: 'secondary',
    size: 'large',
  },
};

export const Medium = {
  args: {
    children: 'Medium Button',
  },
};

export const Small = {
  args: {
    children: '1',
    size: 'small',
  },
};

export const TextWithIcon = {
  args: {
    children: (
      <>
        Download
        <Icon name="download" />
      </>
    ),
    size: 'small',
    className: 'gap-1.5',
  },
};

export const OnlyIcon = {
  args: {
    children: <Icon className="cursor-pointer" name="lightbulb" size={40} />,
    asChild: true,
    size: 'small',
  },
};

export const AsChild = {
  args: {
    asChild: true,
    children: <Link href="#!">asChild</Link>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
