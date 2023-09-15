import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'rounded-[10px] bg-light-200 text-2xl text-dark-100 ring-offset-white transition-colors placeholder:text-dark-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:bg-dark-200 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
  {
    variants: {
      dimension: {
        medium: 'px-7 py-5',
        small: 'py-1.5',
      },
    },
    defaultVariants: {
      dimension: 'medium',
    },
  }
);
