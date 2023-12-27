import Separator from '~/components/atoms/separator';

import type { Meta } from '@storybook/react';

const meta = {
  title: 'Atoms/Separator',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const VerticalSeparator = () => (
  <div className="flex h-5 items-center gap-2">
    <div>Maktabah</div>
    <Separator orientation="vertical" />
    <div>YARSI</div>
  </div>
);

export const HorizontalSeparator = () => (
  <div className="flex h-5 flex-col items-center gap-2">
    <div>Maktabah</div>
    <Separator />
    <div>YARSI</div>
  </div>
);
