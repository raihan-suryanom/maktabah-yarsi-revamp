'use client';

import { useId } from 'react';
import dynamic from 'next/dynamic';

import { inputVariants } from '../input';
import { selectBaseStyles } from './select.styles';

import type { GroupBase, Props } from 'react-select';
import type SelectType from 'react-select';
import type { VariantProps } from 'class-variance-authority';

const SelectComponent = dynamic(() => import('react-select'), {
  ssr: false,
}) as SelectType;

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
    unstyled
    {...props}
  />
);

export default Select;
