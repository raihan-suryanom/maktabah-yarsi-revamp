'use client';

import { forwardRef } from 'react';
import { Root, Indicator } from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '~/lib/utils';

const Checkbox = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'peer h-6 w-6 shrink-0 rounded-md border-2 border-[#c3c3c3] ring-offset-white focus-visible:border-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-light data-[state=checked]:bg-primary-light data-[state=checked]:text-slate-50 dark:border-light-300 dark:ring-offset-dark-200 dark:focus-visible:border-primary-dark dark:focus-visible:ring-primary-dark dark:data-[state=checked]:border-primary-dark dark:data-[state=checked]:bg-primary-dark',
      className
    )}
    {...props}
  >
    <Indicator className="flex items-center justify-center text-current">
      <Check className="h-4 w-4" strokeWidth={4.5} />
    </Indicator>
  </Root>
));

Checkbox.displayName = Root.displayName;

export { Checkbox };
