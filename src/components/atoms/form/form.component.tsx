'use client';

import {
  Root,
  FormProps,
  FormFieldProps,
  FormControlProps,
  FormLabelProps,
  FormMessageProps,
  FormSubmitProps,
  FormMessage,
  FormLabel,
  FormControl,
  FormField,
  FormSubmit,
} from '@radix-ui/react-form';

import { cn } from '~/lib/utils';

import type { FC } from 'react';

const PrimitiveFormRoot: FC<FormProps> = ({ className, ...props }) => (
  <Root className={cn('flex flex-col gap-2.5', className)} {...props} />
);

const PrimitiveFormField: FC<FormFieldProps> = ({ className, ...props }) => (
  <FormField className={cn('flex flex-col gap-1', className)} {...props} />
);

const PrimitiveFormControl: FC<FormControlProps> = ({
  className,
  ...props
}) => <FormControl className={cn(className)} {...props} />;

const PrimitiveFormLabel: FC<FormLabelProps> = ({ className, ...props }) => (
  <FormLabel className={cn('text-lg font-semibold', className)} {...props} />
);

const PrimitiveFormMessage: FC<FormMessageProps> = ({
  className,
  ...props
}) => <FormMessage className={cn('text-red-500', className)} {...props} />;

const PrimitiveFormSubmit: FC<FormSubmitProps> = ({ className, ...props }) => (
  <FormSubmit className={cn(className)} {...props} />
);

export {
  PrimitiveFormRoot as Root,
  PrimitiveFormField as Field,
  PrimitiveFormControl as Control,
  PrimitiveFormMessage as Message,
  PrimitiveFormLabel as Label,
  PrimitiveFormSubmit as Submit,
};
