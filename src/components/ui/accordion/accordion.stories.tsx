import Link from 'next/link';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Icon,
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

type Story = StoryObj<typeof meta>;

export default meta;

export const DefaultAccordion: Story = {
  render: () => (
    <Accordion type="single" className="font-poppins" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger
          variant="categories"
          className="[&[data-state=open]>svg[id=book-marked]]:rotate-0"
        >
          <Icon
            id="book-marked"
            name="book-marked"
            className="mr-2.5"
            size={30}
            strokeWidth={3}
          />
          <span className="mr-2.5 text-2xl">Akhlakul Karimah</span>
          <Badge className="font-bold">34</Badge>
          <Icon
            name="chevron-down"
            className="ml-auto shrink-0 text-primary-light transition-transform duration-200 dark:text-primary-dark"
            size={24}
            strokeWidth={3}
          />
        </AccordionTrigger>
        <AccordionContent asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-2.5 text-2xl font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </AccordionContent>
        <AccordionContent asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-2.5 text-2xl font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </AccordionContent>
        <AccordionContent asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-2.5 text-2xl font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          variant="categories"
          className="[&[data-state=open]>svg[id=book-marked]]:rotate-0"
        >
          <Icon
            id="book-marked"
            name="book-marked"
            className="mr-2.5"
            size={30}
            strokeWidth={3}
          />
          <span className="mr-2.5 text-2xl">Akhlakul Karimah</span>
          <Badge>34</Badge>
          <Icon
            name="chevron-down"
            className="ml-auto shrink-0 text-primary-light transition-transform duration-200 dark:text-primary-dark"
            size={24}
            strokeWidth={3}
          />
        </AccordionTrigger>
        <AccordionContent asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-2.5 text-2xl font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </AccordionContent>
        <AccordionContent asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-2.5 text-2xl font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </AccordionContent>
        <AccordionContent asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-2.5 text-2xl font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SimpleAccordion: Story = {
  render: () => (
    <Accordion type="multiple" className="font-poppins">
      <AccordionItem value="item-1">
        <AccordionTrigger variant="tableOfContent">
          <Icon
            name="chevron-right"
            className="mr-2.5"
            size={30}
            strokeWidth={3}
          />
          <span className="text-2xl">Akhlakul Karimah</span>
        </AccordionTrigger>
        <AccordionContent asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l border-dashed border-[#e5e5e5] py-2.5 text-2xl font-normal hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">
              Akhlakul karimah Akhlakul karimah Akhlakul karimah Akhlakul
              karimah Akhlakul karimah Akhlakul karimah Akhlakul karimah
            </Link>
          </Button>
        </AccordionContent>
        <AccordionContent>
          <Accordion
            type="multiple"
            className="border-l border-dashed border-[#e5e5e5] pl-8 font-poppins"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger variant="tableOfContent">
                <Icon
                  name="chevron-right"
                  className="mr-2.5"
                  size={30}
                  strokeWidth={3}
                />
                <span className="text-2xl">Akhlakul Karimah</span>
              </AccordionTrigger>
              <AccordionContent asChild>
                <Button
                  className="block w-full cursor-pointer rounded-l-none border-l border-dashed border-[#e5e5e5] py-2.5 text-2xl font-normal hover:text-primary-light dark:hover:text-primary-dark"
                  asChild
                >
                  <Link href="/test">
                    Akhlakul karimah Akhlakul karimah Akhlakul karimah Akhlakul
                    karimah Akhlakul karimah Akhlakul karimah Akhlakul karimah
                  </Link>
                </Button>
              </AccordionContent>
              <AccordionContent asChild>
                <Button
                  className="block w-full cursor-pointer rounded-l-none border-l border-dashed border-[#e5e5e5] py-2.5 text-2xl font-normal hover:text-primary-light dark:hover:text-primary-dark"
                  asChild
                >
                  <Link href="/test">Akhlakul karimah</Link>
                </Button>
              </AccordionContent>
              <AccordionContent asChild>
                <Button
                  className="block w-full cursor-pointer rounded-l-none border-l border-dashed border-[#e5e5e5] py-2.5 text-2xl font-normal hover:text-primary-light dark:hover:text-primary-dark"
                  asChild
                >
                  <Link href="/test">Akhlakul karimah</Link>
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
        <AccordionContent asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l border-dashed border-[#e5e5e5] py-2.5 text-2xl font-normal hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
