import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

import { Button, Input, Skeleton } from '~/components/atoms';
import { cn } from '~/lib/utils';

type PaginationProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Pagination = ({ className, ...props }: PaginationProps) => {
  return (
    <footer
      className={cn(
        'mx-auto flex h-8 w-min items-stretch justify-between gap-0.5 [&_a]:w-8 [&_svg]:h-full [&_svg]:w-8 [&_svg]:p-1',
        className
      )}
      {...props}
    >
      <Button variant="primary" asChild>
        <ChevronsLeft />
      </Button>
      <Button variant="primary" asChild>
        <ChevronLeft />
      </Button>
      <Button variant="primary" asChild>
        <Link href="#!">1</Link>
      </Button>
      <Input
        className="w-8 appearance-none rounded-none text-center"
        dimension="small"
        type="number"
        placeholder="..."
      />
      <Button variant="primary" asChild>
        <Link href="#!">2</Link>
      </Button>
      <Button variant="primary" asChild>
        <ChevronsRight />
      </Button>
      <Button variant="primary" asChild>
        <ChevronRight />
      </Button>
    </footer>
  );
};

export const PaginationSkeleton = () => (
  <div className="mx-auto flex h-8 w-min items-stretch justify-between gap-0.5 [&>div]:h-full [&>div]:w-8 [&>div]:p-1">
    {[...Array(7)].map((_, index) => (
      <Skeleton key={index} />
    ))}
  </div>
);

export default Pagination;
