'use client';

import { useId } from 'react';
import dynamic from 'next/dynamic';

import { inputVariants } from '../input';
import { selectBaseStyles } from './select.styles';
import { Skeleton } from '../skeleton';

import type { GroupBase, Props } from 'react-select';
import type SelectType from 'react-select';
import type { VariantProps } from 'class-variance-authority';

const SelectComponent = dynamic(() => import('react-select'), {
  ssr: false,
  loading: () => <Skeleton className="h-11 rounded-lg bg-light-300" />,
}) as SelectType;

const onBlurWorkaround = (event: React.FocusEvent<HTMLInputElement>) => {
  const element = event.relatedTarget;
  if (
    element &&
    (element.tagName === 'A' ||
      element.tagName === 'BUTTON' ||
      element.tagName === 'INPUT')
  ) {
    (element as HTMLElement).focus();
  }
};

const Select = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  className,
  dimension,
  ...props
}: Props<Option, IsMulti, Group> & VariantProps<typeof inputVariants>) => (
  <SelectComponent
    instanceId={useId()}
    classNames={selectBaseStyles<Option, IsMulti, Group>(
      inputVariants({ dimension, className })
    )}
    onBlur={onBlurWorkaround}
    closeMenuOnSelect={false}
    unstyled
    {...props}
  />
);

export default Select;
