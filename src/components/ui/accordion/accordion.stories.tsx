import Link from 'next/link';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from '~/components';

const meta = {
  title: 'UI/Accordion',
  component: AccordionContent,
  decorators: [
    (Story) => (
      <div className="w-[30rem]">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAccordion: Story = {
  args: {
    children: 't',
  },
  render: ({ children }) => (
    <Accordion type="multiple">
      <AccordionItem value="item-1" variant="categories">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent asChild>
          <Button
            className="cursor-pointer rounded-l-none border-l-4 border-dark-200/50 py-1"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </AccordionContent>
        <AccordionContent>{children}</AccordionContent>
        <AccordionContent>Akhlak Iman</AccordionContent>
        <AccordionContent>Akhlak Pribadi</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
