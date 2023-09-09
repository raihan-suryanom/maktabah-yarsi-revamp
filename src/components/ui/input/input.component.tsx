import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { Fragment, forwardRef } from 'react';

import { cn } from '~/lib/utils';
import { Icon } from '../icon';
import { inputVariants } from './input.styles';

import type { VariantProps } from 'class-variance-authority';

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> &
    VariantProps<typeof inputVariants> & {
      withIcon?: keyof typeof dynamicIconImports;
    }
>(({ className, type, size, withIcon, ...props }, ref) => {
  const Component = withIcon ? 'div' : Fragment;

  return (
    <Component {...(withIcon && {className:'relative flex items-center justify-between'})}>
      <input
        type={type}
        className={cn(inputVariants({ size, className }))}
        ref={ref}
        {...props}
      />
      {withIcon ? (
        <Icon
          name={withIcon}
          className="absolute right-7 bg-light-100 text-primary-light dark:text-primary-dark"
          size={36}
          strokeWidth={3}
        />
      ) : null}
    </Component>
  );
});

Input.displayName = 'Input';

export default Input;
