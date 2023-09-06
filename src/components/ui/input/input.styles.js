import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'rounded-[10px] bg-light-100 font-poppins text-2xl ring-offset-white transition-colors placeholder:text-dark-100/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
  {
    variants: {
      size: {
        large: 'px-7 py-5',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);
