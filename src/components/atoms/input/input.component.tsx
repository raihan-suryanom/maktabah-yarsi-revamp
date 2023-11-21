import { forwardRef } from 'react';

import { cn } from '~/lib/utils/cn';
import { inputVariants } from './input.styles';

import type { VariantProps } from 'class-variance-authority';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, dimension, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(inputVariants({ dimension, className }))}
      ref={ref}
      {...props}
    />
  )
);

Input.displayName = 'Input';

export default Input;
