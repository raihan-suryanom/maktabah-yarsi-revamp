import Link from 'next/link';

import { Separator } from '~/components/atoms';
import { cn } from '~/lib/utils';

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement> & {
  routes: { title: string; link?: string }[];
};

const Breadcrumb = ({ routes, className, ...props }: BreadcrumbProps) => {
  return (
    <nav className={cn('overflow-x-auto', className)} {...props}>
      <ul className="flex h-5 items-center gap-2.5">
        <Link href="#!">Home</Link>
        <Separator
          orientation="vertical"
          className="w-0.5 rotate-12 opacity-70"
        />
        <Link href="category">Category</Link>
        <Separator
          orientation="vertical"
          className="w-0.5 rotate-12 opacity-70"
        />
        <Link href="#!">Akhlak</Link>
        <Separator
          orientation="vertical"
          className="w-0.5 rotate-12 opacity-70"
        />
        <Link href="#!">Akhlakul Fiqih</Link>
        <Separator
          orientation="vertical"
          className="w-0.5 rotate-12 opacity-70"
        />
        <Link href="#!" className="font-bold">
          Dalail al-Khairat
        </Link>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
