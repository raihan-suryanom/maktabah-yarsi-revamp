import { Button } from "~/components";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Outline = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Large = {
  args: {
    children: "Large Button",
    variant: "secondary",
    size: "large",
  },
};

export const Medium = {
  args: {
    children: "Medium Button",
  },
};

export const Icon = {
  args: {
    children: "1",
    size: "icon",
  },
};
