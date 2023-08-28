import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-poppins font-bold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-light text-light-200 hover:bg-primary-light/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90',
        secondary:
          'bg-light-300 text-dark-100 hover:bg-light-300/80 dark:bg-dark-200 dark:text-light-100 dark:hover:bg-dark-200/80',
        outline:
          'border-2 border-primary-light bg-light-200 text-primary-light hover:bg-primary-light hover:text-light-200 dark:border-primary-dark dark:bg-dark-200 dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-light-200',
        link: 'text-slate-900 underline-offset-4 hover:underline dark:text-slate-50',
      },
      size: {
        large: 'px-7 py-5 text-2xl',
        medium: 'px-5 py-2.5',
        small: 'p-1.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);
