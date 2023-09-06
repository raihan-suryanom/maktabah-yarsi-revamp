import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from '~/components';

export default {
  title: 'UI/Accordion',
  component: Accordion,
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
};

export const DefaultAccordion = {
  args: {
    variant: 'categories',
  },
  render: ({ variant }) => (
    <Accordion type="multiple">
      <AccordionItem value="item-1" variant={variant}>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent asChild>
          <Button
            variant="ghost"
            className="cursor-pointer rounded-l-none border-l-4 border-dark-200/50 py-1"
            asChild
          >
            <Link href="/test">Akhlakul karimah</Link>
          </Button>
        </AccordionContent>
        <AccordionContent>Akhlak Fiqih</AccordionContent>
        <AccordionContent>Akhlak Iman</AccordionContent>
        <AccordionContent>Akhlak Pribadi</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
