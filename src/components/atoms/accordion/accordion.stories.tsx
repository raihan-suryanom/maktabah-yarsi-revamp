import Link from 'next/link';

import type { Meta, StoryObj } from '@storybook/react';

import { Accordion, Badge, Button, Icon } from '~/components/atoms';

const meta = {
  title: 'Atoms/Accordion',
  component: Accordion.Content,
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
} satisfies Meta<typeof Accordion.Content>;

type Story = StoryObj<typeof meta>;

export default meta;

export const DefaultAccordion: Story = {
  render: () => (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger
          variant="categories"
          className="[&[data-state=open]>svg[id=book-marked]]:rotate-0"
        >
          <Icon
            id='book-marked'
            name="book-marked"
            size={24}
            strokeWidth={3}
          />
          <span className="text-lg">Akhlakul Karimah</span>
          <Badge className="font-bold">34</Badge>
          <Icon
            name="chevron-down"
            className="ml-auto shrink-0 text-primary-light transition-transform duration-200 dark:text-primary-dark"
            size={24}
            strokeWidth={3}
          />
        </Accordion.Trigger>
        <Accordion.Content asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-1.5 text-lg font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </Accordion.Content>
        <Accordion.Content asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-1.5 text-lg font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </Accordion.Content>
        <Accordion.Content asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-1.5 text-lg font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger
          variant="categories"
          className="[&[data-state=open]>svg[id=book-marked]]:rotate-0"
        >
          <Icon
            id="book-marked"
            name="book-marked"
            className="mr-2.5"
            size={24}
            strokeWidth={3}
          />
          <span className="mr-2.5 text-lg">Akhlakul Karimah</span>
          <Badge>34</Badge>
          <Icon
            name="chevron-down"
            className="ml-auto shrink-0 text-primary-light transition-transform duration-200 dark:text-primary-dark"
            size={24}
            strokeWidth={3}
          />
        </Accordion.Trigger>
        <Accordion.Content asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-1.5 text-lg font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </Accordion.Content>
        <Accordion.Content asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-1.5 text-lg font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </Accordion.Content>
        <Accordion.Content asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l-[3px] border-[#e5e5e5] py-1.5 text-lg font-normal hover:border-l-4 hover:border-primary-light hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const SimpleAccordion: Story = {
  render: () => (
    <Accordion.Root type="multiple">
      <Accordion.Item value="item-1">
        <Accordion.Trigger variant="tableOfContent">
          <Icon
            name="chevron-right"
            className="mr-2.5"
            size={24}
            strokeWidth={3}
          />
          <span className="text-lg">Akhlakul Karimah</span>
        </Accordion.Trigger>
        <Accordion.Content asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l border-dashed border-[#e5e5e5] py-1.5 text-lg font-normal hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">
              Akhlakul karimah Akhlakul karimah Akhlakul karimah Akhlakul
              karimah Akhlakul karimah Akhlakul karimah Akhlakul karimah
            </Link>
          </Button>
        </Accordion.Content>
        <Accordion.Content>
          <Accordion.Root
            type="multiple"
            className="border-l border-dashed border-[#e5e5e5] pl-8"
          >
            <Accordion.Item value="item-1">
              <Accordion.Trigger variant="tableOfContent">
                <Icon
                  name="chevron-right"
                  className="mr-2.5"
                  size={24}
                  strokeWidth={3}
                />
                <span className="text-lg">Akhlakul Karimah</span>
              </Accordion.Trigger>
              <Accordion.Content asChild>
                <Button
                  className="block w-full cursor-pointer rounded-l-none border-l border-dashed border-[#e5e5e5] py-1.5 text-lg font-normal hover:text-primary-light dark:hover:text-primary-dark"
                  asChild
                >
                  <Link href="/test">
                    Akhlakul karimah Akhlakul karimah Akhlakul karimah Akhlakul
                    karimah Akhlakul karimah Akhlakul karimah Akhlakul karimah
                  </Link>
                </Button>
              </Accordion.Content>
              <Accordion.Content asChild>
                <Button
                  className="block w-full cursor-pointer rounded-l-none border-l border-dashed border-[#e5e5e5] py-1.5 text-lg font-normal hover:text-primary-light dark:hover:text-primary-dark"
                  asChild
                >
                  <Link href="/test">Akhlakul karimah</Link>
                </Button>
              </Accordion.Content>
              <Accordion.Content asChild>
                <Button
                  className="block w-full cursor-pointer rounded-l-none border-l border-dashed border-[#e5e5e5] py-1.5 text-lg font-normal hover:text-primary-light dark:hover:text-primary-dark"
                  asChild
                >
                  <Link href="/test">Akhlakul karimah</Link>
                </Button>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </Accordion.Content>
        <Accordion.Content asChild>
          <Button
            className="block w-full cursor-pointer rounded-l-none border-l border-dashed border-[#e5e5e5] py-1.5 text-lg font-normal hover:text-primary-light dark:hover:text-primary-dark"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
};
