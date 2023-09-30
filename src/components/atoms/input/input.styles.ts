import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'rounded-lg bg-light-300 text-2xl text-dark-100 ring-offset-white transition-colors placeholder:text-xl placeholder:text-dark-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-1 dark:bg-dark-200 dark:ring-offset-slate-950 dark:focus-visible:ring-primary-dark',
  {
    variants: {
      dimension: {
        medium: 'rounded-md px-7 py-5',
        small: 'py-1.5',
      },
    },
    defaultVariants: {
      dimension: 'medium',
    },
  }
);
