'use client';

import { Fragment, forwardRef } from 'react';

import { cn } from '~/lib/utils';
import { Icon } from '../icon';
import { InputVariants } from './input.styles';
import { InputPropTypes } from './input.config';

/**
 * @type React.ForwardRefRenderFunction<?, InputPropTypes>
 */
const Input = forwardRef(
  ({ className, type, size, withIcon, ...props }, ref) => {
    const Component = withIcon ? 'div' : Fragment;

    return (
      <Component className="relative flex items-center justify-between">
        <input
          type={type}
          className={cn(InputVariants({ withIcon, size, className }))}
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
  }
);

Input.displayName = 'Input';
Input.propTypes = InputPropTypes;

export { Input };
