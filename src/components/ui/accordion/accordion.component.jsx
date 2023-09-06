/* eslint-disable react/prop-types */

'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { forwardRef } from 'react';

import { cn } from '~/lib/utils';
import { Icon } from '../icon';
import {
  accordionContentVariants,
  accordionItemVariants,
  accordionTriggerVariants,
} from './accordion.style';

const Accordion = AccordionPrimitive.Root;

/**
 * @type React.ForwardRefRenderFunction<
 *  React.ElementRef<typeof AccordionPrimitive.Item>,
 *  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>
 */
const AccordionItem = forwardRef(({ className, variant, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(accordionItemVariants({ variant, className }))}
    {...props}
  />
));

AccordionItem.displayName = 'AccordionItem';

/**
 * @type React.ForwardRefRenderFunction<
 *  React.ElementRef<typeof AccordionPrimitive.Trigger>,
 *  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>
 */
const AccordionTrigger = forwardRef(
  ({ className, variant, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(accordionTriggerVariants({ variant, className }))}
        {...props}
      >
        {children}
        <Icon
          name="chevron-down"
          className="h-4 w-4 shrink-0 text-primary-light transition-transform duration-200 dark:text-primary-dark"
          size={24}
          strokeWidth={3}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/**
 * @type React.ForwardRefRenderFunction<
 *  React.ElementRef<typeof AccordionPrimitive.Content>,
 *  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>
 */
const AccordionContent = forwardRef(
  ({ className, variant, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(accordionContentVariants({ variant, className }))}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
