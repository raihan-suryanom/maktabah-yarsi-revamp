'use client';

import { useRouter } from 'next/navigation';
import { forwardRef } from 'react';
import { cn } from '~/lib/utils';

const TableRow = forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, test, ...props }, ref) => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/books/dummy-template/4?query=ti');
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
