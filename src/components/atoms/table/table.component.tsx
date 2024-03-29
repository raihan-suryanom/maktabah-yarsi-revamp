import { forwardRef } from 'react';

import { cn } from '~/lib/utils/cn';
import TableRow from './table.client.component';

const Table = forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative max-h-[50vh] w-full overflow-auto">
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
));

Table.displayName = 'Table';

const TableHeader = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      'bg-primary-light [&_tr]:cursor-default [&_tr]:border-b [&_tr]:hover:bg-primary-light',
      className
    )}
    {...props}
  />
));

TableHeader.displayName = 'TableHeader';

const TableBody = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
));

TableBody.displayName = 'TableBody';

const TableFooter = forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'bg-slate-900 font-medium text-slate-50 dark:bg-slate-50 dark:text-slate-900',
      className
    )}
    {...props}
  />
));

TableFooter.displayName = 'TableFooter';

const TableHead = forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'py-1.5 text-center align-middle font-bold text-light-100 [&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
));

TableHead.displayName = 'TableHead';

const TableCell = forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'px-4 py-2 text-center align-middle [&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
));

TableCell.displayName = 'TableCell';

const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('text-sm text-slate-500 dark:text-slate-400', className)}
    {...props}
  />
));

TableCaption.displayName = 'TableCaption';

export {
  Table as Root,
  TableHeader as Header,
  TableBody as Body,
  TableFooter as Footer,
  TableHead as Head,
  TableRow as Row,
  TableCell as Cell,
  TableCaption as Caption,
};
