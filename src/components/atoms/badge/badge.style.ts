import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center rounded-full p-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:focus:ring-slate-300',
  {
    variants: {
      variant: {
        primary:
          'border-transparent bg-primary-light text-light-100 hover:bg-primary-light/80 dark:bg-primary-dark dark:text-slate-50 dark:hover:bg-primary-dark/80',
        outline:
          'border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80',
        secondary:
          'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);
