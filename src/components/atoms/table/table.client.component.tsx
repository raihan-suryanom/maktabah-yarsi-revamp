'use client';

import { useRouter } from 'next/navigation';
import { forwardRef } from 'react';

import { cn } from '~/lib/utils/cn';

const TableRow = forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & {
    page?: number;
    bibliography?: string;
  }
>(({ className, page, bibliography, ...props }, ref) => {
  const router = useRouter();

  const handleNavigation = () => {
    const { search } = new URL(window.location.href);
    router.push(`/bibliographies/${bibliography}/${page}${search}`);
  };

  return (
    <tr
      ref={ref}
      className={cn(
        'cursor-pointer border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800',
        className
      )}
      onClick={handleNavigation}
      {...props}
    />
  );
});

TableRow.displayName = 'TableRow';

export default TableRow;
