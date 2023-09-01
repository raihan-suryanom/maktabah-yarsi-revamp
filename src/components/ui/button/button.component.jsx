'use client';

import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '~/lib/utils';
import {
  ButtonDefaultProps,
  ButtonDisplayName,
  ButtonPropTypes,
} from './button.config';
import { buttonVariants } from './button.styles';

/**
 * @type React.ForwardRefRenderFunction<?, ButtonPropTypes>
 */
const Button = forwardRef(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Component = asChild ? Slot : 'button';
    return (
      <Component
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.propTypes = ButtonPropTypes;
Button.defaultProps = ButtonDefaultProps;
Button.displayName = ButtonDisplayName;

export { Button };
