import { forwardRef } from 'react';

import { cn } from '~/lib/utils';
import { Icon, Input } from '~/components/atoms';

import type { InputProps } from '~/components/atoms/input';

const SearchInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <div
      className={cn(
        'relative flex items-center justify-between rounded-[10px] pr-5',
        className
      )}
    >
      <Input
        type="search"
        className="w-full bg-inherit pr-5"
        ref={ref}
        {...props}
      />
      <Icon
        name="search"
        className="absolute right-7 text-primary-light dark:text-primary-dark"
        size={props.dimension === 'medium' ? 36 : 24}
        strokeWidth={3}
      />
    </div>
  )
);

SearchInput.displayName = 'Input';

export default SearchInput;
