import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '~/lib/utils';
import {
  ButtonDisplayName,
  ButtonDefaultProps,
  ButtonPropTypes,
} from './button.config';
import { buttonVariants } from './button.styles';

/**
 * @typedef {import('react').ButtonHTMLAttributes<HTMLButtonElement} ButtonProps
 * @typedef {import('class-variance-authority').VariantProps<typeof buttonVariants>} VariantProps
 * @typedef {ButtonPropTypes & ButtonProps & VariantProps} ExtendedButtonProps
 * @type React.ForwardRefRenderFunction<HTMLButtonElement, ExtendedButtonProps>
 */
const Button = ({ className, variant, size, asChild, ...props }, ref) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
};

Button.propTypes = ButtonPropTypes;
Button.defaultProps = ButtonDefaultProps;
Button.displayName = ButtonDisplayName;

export default forwardRef(Button);
