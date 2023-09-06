import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { Fragment, forwardRef } from 'react';

import { cn } from '~/lib/utils';
import { Icon } from '../icon';
import { inputVariants } from './input.styles';

/**
 * @typedef {import('react').InputHTMLAttributes<HTMLInputElement} InputProps
 * @typedef {import('class-variance-authority').VariantProps<typeof inputVariants>} VariantProps
 * @typedef {object} InputPropTypes
 * @property {keyof typeof dynamicIconImports} withIcon
 * @typedef {InputPropTypes & InputProps & VariantProps} ExtendedInputProps
 * @type React.ForwardRefRenderFunction<HTMLInputElement, ExtendedInputProps>
 * @property
 */
const Input = ({ className, type, size, withIcon, ...props }, ref) => {
  const Component = withIcon ? 'div' : Fragment;

  return (
    <Component className="relative flex items-center justify-between">
      <input
        type={type}
        className={cn(inputVariants({ withIcon, size, className }))}
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
};

Input.displayName = 'Input';

export default forwardRef(Input);
