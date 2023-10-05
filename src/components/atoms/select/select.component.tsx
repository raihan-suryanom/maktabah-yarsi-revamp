'use client';

import { useId } from 'react';
import SelectComponent, { type GroupBase, Props } from 'react-select';

import { inputVariants } from '../input';
import { selectBaseStyles } from './select.styles';

import type { VariantProps } from 'class-variance-authority';

const Select = <
  Option,
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
