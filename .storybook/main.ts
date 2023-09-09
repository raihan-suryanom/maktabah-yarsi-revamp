import path from 'path';

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  webpackFinal: async (config) => {
    config!.resolve!.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    config!.resolve!.alias = {
      ...config!.resolve!.alias,
      '~': path.resolve(__dirname, '../src'),
    };
    return config;
  },
};
export default config;
