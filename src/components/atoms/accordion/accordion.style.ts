import { cva } from 'class-variance-authority';

export const accordionTriggerVariants = cva(
  'flex flex-1 items-center py-2 font-medium transition-all [&[data-state=open]>svg]:rotate-180',
  {
    variants: {
      variant: {
        categories:
          'data-[state=open]:text-primary-light dark:data-[state=open]:text-primary-dark [&[data-state=open]>svg]:rotate-180 gap-1.5',
        tableOfContent: 'p-0 [&[data-state=open]>svg]:rotate-90 items-start justify-start text-left',
      },
    },
  }
);
