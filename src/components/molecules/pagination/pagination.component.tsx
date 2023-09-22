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
        'flex h-8 items-stretch w-min mx-auto justify-between gap-0.5 [&_a]:w-8 [&_svg]:h-full [&_svg]:w-8 [&_svg]:p-1',
        className
      )}
      {...props}
    >
      <Button variant="primary" asChild>
        <Icon name="chevrons-left" />
      </Button>
      <Button variant="primary" asChild>
        <Icon name="chevron-left"/>
      </Button>
      <Button variant="primary" asChild>
        <Link href="#!">
          1
        </Link>
      </Button>
      <Input
        className="w-8 appearance-none rounded-none text-center"
        dimension="small"
        type="number"
        placeholder="..."
      />
      <Button variant="primary" asChild>
        <Link href="#!">
          2
        </Link>
      </Button>
      <Button variant="primary" asChild>
        <Icon name="chevrons-right" />
      </Button>
      <Button variant="primary" asChild>
        <Icon name="chevron-right" />
      </Button>
    </footer>
  );
};

export default Pagination;
