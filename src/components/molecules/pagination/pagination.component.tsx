import Link from 'next/link';

import { Button, Icon, Input } from '~/components/atoms';
import { cn } from '~/lib/utils';

type PaginationProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

const Pagination = ({ className, ...props }: PaginationProps) => {
  return (
    <footer
      className={cn(
        'flex h-12 items-stretch justify-between gap-1 [&_a]:w-12 [&_svg]:h-full [&_svg]:w-12',
        className
      )}
      {...props}
    >
      <Button size="small" variant="primary" asChild>
        <Icon name="chevrons-left" />
      </Button>
      <Button size="small" variant="primary" asChild>
        <Icon name="chevron-left" />
      </Button>
      <Button size="small" variant="primary" asChild>
        <Link href="#!" className="text-2xl">
          1
        </Link>
      </Button>
      <Input
        className="w-12 appearance-none rounded-[1px] text-center"
        dimension="small"
        type="number"
        placeholder="..."
      />
      <Button size="small" variant="primary" asChild>
        <Link href="#!" className="text-2xl">
          2
        </Link>
      </Button>
      <Button size="small" variant="primary" asChild>
        <Icon name="chevrons-right" />
      </Button>
      <Button size="small" variant="primary" asChild>
        <Icon name="chevron-right" />
      </Button>
    </footer>
  );
};

export default Pagination;
