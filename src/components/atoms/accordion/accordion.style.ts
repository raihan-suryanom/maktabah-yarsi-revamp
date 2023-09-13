import { cva } from 'class-variance-authority';

export const accordionTriggerVariants = cva(
  'flex flex-1 items-center py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180',
  {
    variants: {
      variant: {
        categories:
          'data-[state=open]:text-primary-light dark:data-[state=open]:text-primary-dark [&[data-state=open]>svg]:rotate-180',
        tableOfContent: '[&[data-state=open]>svg]:rotate-90',
      },
    },
  }
);
