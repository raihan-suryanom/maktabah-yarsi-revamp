import { cva } from 'class-variance-authority';

export const accordionTriggerVariants = cva(
  'flex flex-1 items-center text-lg font-medium transition-all [&[data-state=open]>svg]:rotate-180',
  {
    variants: {
      variant: {
        categories:
          'gap-1.5 pl-0.5 data-[state=open]:text-primary-light dark:data-[state=open]:text-primary-dark [&[data-state=open]>svg[id=book-marked]]:rotate-0 [&[data-state=open]>svg]:rotate-180',
        tableOfContent:
          'items-start justify-start p-0 text-left [&[data-state=open]>svg]:rotate-90',
      },
    },
  }
);
