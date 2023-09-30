'use client';

import { FC } from 'react';
import * as FormPrimitive from '@radix-ui/react-form';

import { cn } from '~/lib/utils';

const Form: FC<FormPrimitive.FormProps> = ({ className, ...props }) => (
  <FormPrimitive.Root
    className={cn('flex flex-col gap-2.5', className)}
    {...props}
  />
);

const FormField: FC<FormPrimitive.FormFieldProps> = ({
  className,
  ...props
}) => (
  <FormPrimitive.FormField
    className={cn('flex flex-col gap-2', className)}
    {...props}
  />
);

const FormControl: FC<FormPrimitive.FormControlProps> = ({
  className,
  ...props
}) => <FormPrimitive.FormControl className={cn(className)} {...props} />;

const FormLabel: FC<FormPrimitive.FormLabelProps> = ({
  className,
  ...props
}) => (
  <FormPrimitive.FormLabel
    className={cn('text-lg font-semibold', className)}
    {...props}
  />
);

const FormMessage: FC<FormPrimitive.FormMessageProps> = ({
  className,
  ...props
}) => (
  <FormPrimitive.FormMessage
    className={cn('text-red-500', className)}
    {...props}
  />
);

const FormValidityState = FormPrimitive.FormValidityState;

const FormSubmit: FC<FormPrimitive.FormSubmitProps> = ({
  className,
  ...props
}) => <FormPrimitive.FormSubmit className={cn(className)} {...props} />;

// export default () => (
//   <Form.Root>
//     <Form.Field>
//       <Form.Label />
//       <Form.Control />
//       <Form.Message />
//       <Form.ValidityState />
//     </Form.Field>

//     <Form.Message />
//     <Form.ValidityState />

//     <Form.Submit />
//   </Form.Root>
// );

// const FormDemo = () => (
//   <Form.Root className="w-[260px]">
//     <Form.Field className="grid mb-[10px]" name="email">
//       <div className="flex items-baseline justify-between">
//         <Form.Label className="text-[15px] font-medium leading-[35px] text-white">Email</Form.Label>
//         <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
//           Please enter your email
//         </Form.Message>
//         <Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
//           Please provide a valid email
//         </Form.Message>
//       </div>
//       <Form.Control asChild>
//         <input
//           className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
//           type="email"
//           required
//         />
//       </Form.Control>
//     </Form.Field>
//     <Form.Field className="grid mb-[10px]" name="question">
//       <div className="flex items-baseline justify-between">
//         <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
//           Question
//         </Form.Label>
//         <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
//           Please enter a question
//         </Form.Message>
//       </div>
//       <Form.Control asChild>
//         <textarea
//           className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
//           required
//         />
//       </Form.Control>
//     </Form.Field>
//     <Form.Submit asChild>
//       <button className="box-border w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
//         Post question
//       </button>
//     </Form.Submit>
//   </Form.Root>
// );

export {
  Form as Root,
  FormField as Field,
  FormControl as Control,
  FormMessage as Message,
  FormLabel as Label,
  FormSubmit as Submit,
  FormValidityState as ValidityState,
};
