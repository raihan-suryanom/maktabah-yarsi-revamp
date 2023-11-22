'use client';

import { forwardRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  Item,
  Root,
  Trigger,
  Header,
  Content,
} from '@radix-ui/react-accordion';

import { cn } from '~/lib/utils/cn';
import { accordionTriggerVariants } from './accordion.style';

import type { VariantProps } from 'class-variance-authority';

const Accordion = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & {
    controlled?: boolean;
  }
>(({ className, controlled, ...props }, ref) => {
  const pathname = usePathname();
  const categories = controlled ? pathname.split('/').slice(2) : [props.itemID];

  return (
    <Root
      className={cn('capitalize', className)}
      ref={ref}
      defaultValue={categories as unknown as undefined}
      {...props}
    />
  );
});

Accordion.displayName = Root.displayName;

const AccordionItem = forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => <Item ref={ref} {...props} />);

AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger> &
    VariantProps<typeof accordionTriggerVariants>
>(({ variant, className, children, ...props }, ref) => (
  <Header className="flex">
    <Trigger
      ref={ref}
      className={cn(accordionTriggerVariants({ variant, className }))}
      {...props}
    >
      {children}
    </Trigger>
  </Header>
));

AccordionTrigger.displayName = Trigger.displayName;

const AccordionContent = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content
    ref={ref}
    className={cn(
      'ml-3 overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div>{children}</div>
  </Content>
));

AccordionContent.displayName = Content.displayName;

export {
  Accordion as Root,
  AccordionItem as Item,
  AccordionTrigger as Trigger,
  AccordionContent as Content,
};
