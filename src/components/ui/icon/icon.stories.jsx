import dynamicIconImports from 'lucide-react/dynamicIconImports';

import { Icon } from '~/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(dynamicIconImports),
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultIcon = {
  args: {
    name: 'library',
    size: 30,
  },
};
