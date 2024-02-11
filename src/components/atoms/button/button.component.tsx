import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '~/lib/utils/cn';
import { buttonVariants } from './button.styles';

import type { VariantProps } from 'class-variance-authority';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    unstyled?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, unstyled, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'button';

    return (
      <Component
        className={
          unstyled
            ? className
            : cn(buttonVariants({ variant, size, className }))
        }
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
