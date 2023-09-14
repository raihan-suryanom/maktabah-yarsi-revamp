import { forwardRef } from 'react';

import { cn } from '~/lib/utils';
import { Icon, Input } from '~/components/atoms';

import type { InputProps } from '~/components/atoms/input';

const SearchInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('relative flex items-center justify-between', className)}
    >
      <Input type="search" className="w-full" ref={ref} {...props} />
      <Icon
        name="search"
        className="absolute right-7 bg-light-100 text-primary-light dark:text-primary-dark"
        size={36}
        strokeWidth={3}
      />
    </div>
  )
);

SearchInput.displayName = 'Input';

export default SearchInput;