'use client';

import { forwardRef } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '~/lib/utils';

const Separator = forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 rounded-md bg-dark-100 dark:bg-light-100',
        orientation === 'horizontal' ? 'h-1 w-full' : 'h-full w-1',
        className
      )}
      {...props}
    />
  )
);

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
