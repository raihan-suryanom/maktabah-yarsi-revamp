import { cva } from 'class-variance-authority';

export const accordionTriggerVariants = cva(
  'flex flex-1 items-center py-1 font-medium transition-all dark:text-light-400 [&[data-state=open]>svg]:rotate-90',
  {
    variants: {
      variant: {
        categories:
          'gap-x-1.5 pl-0.5 text-xl data-[state=open]:text-primary-light dark:data-[state=open]:text-primary-dark [&[data-state=open]>svg[id=book-marked]]:rotate-0',
        tableOfContent:
          'items-start justify-start p-0 text-left font-semibold leading-snug [&[data-state=open]>svg]:rotate-90',
      },
    },
  }
);
