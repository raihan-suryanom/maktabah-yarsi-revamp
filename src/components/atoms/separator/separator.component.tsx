'use client';

import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-separator';

import { cn } from '~/lib/utils/cn';

const Separator = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => (
    <Root
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

Separator.displayName = Root.displayName;

export default Separator;
