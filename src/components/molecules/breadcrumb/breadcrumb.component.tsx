import Link from 'next/link';

import { Separator } from '~/components/atoms';

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement>;

const Breadcrumb = ({ className, ...props }: BreadcrumbProps) => {
  return (
    <nav {...props}>
      <ul className="flex h-6 items-center gap-2.5 text-xl">
        <Link href="#!">Home</Link>
        <Separator orientation="vertical" className="w-0.5 rotate-12" />
        <Link href="category">Category</Link>
        <Separator orientation="vertical" className="w-0.5 rotate-12" />
        <Link href="#!">Akhlak</Link>
        <Separator orientation="vertical" className="w-0.5 rotate-12" />
        <Link href="#!">Akhlakul Fiqih</Link>
        <Separator orientation="vertical" className="w-0.5 rotate-12" />
        <Link href="#!" className="font-bold">
          Dalail al-Khairat
        </Link>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
