import { cva } from 'class-variance-authority';

export const accordionItemVariants = cva(null, {
  variants: {
    variant: {
      categories: 'data-[state=open]:text-red-500',
      tableOfContent: '',
    },
  },
});

export const accordionContentVariants = cva(
  'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
  {
    variants: {
      variant: {
        tableOfContent: '',
        categories: '',
      },
    },
  }
);

export const accordionTriggerVariants = cva(
  'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
  {
    variants: {
      variant: {
        tableOfContent: '',
        categories: '',
      },
    },
  }
);
