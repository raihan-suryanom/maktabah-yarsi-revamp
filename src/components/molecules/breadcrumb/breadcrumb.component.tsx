import Link from 'next/link';

import { Separator, Skeleton } from '~/components/atoms';
import { cn } from '~/lib/utils';

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement> & {
  paths: { title: string; link?: string }[];
};

const Breadcrumb = ({ paths, className, ...props }: BreadcrumbProps) => {
  const rootPath = { title: 'Home', link: '/' };
  const links: Array<string> = [];

  const previousPaths = [rootPath, ...paths].map((path, level) => {
    if (level === paths.length) {
      return (
        <li key={path.title} className="font-semibold">
          {path.title}
        </li>
      );
    }

    if (level) {
      links.push(path.link as string);
    }

    return (
      <li key={path.title} className="flex h-5 items-center gap-2.5">
        <Link
          className="whitespace-nowrap hover:underline hover:decoration-primary-light hover:decoration-2 hover:underline-offset-1 dark:hover:decoration-primary-dark"
          href={`/categories/${links.join('/')}`}
        >
          {path.title}
        </Link>
        <Separator
          orientation="vertical"
          className="w-0.5 rotate-12 opacity-70"
        />
      </li>
    );
  });

  return (
    <nav className={cn('overflow-x-auto capitalize', className)} {...props}>
      <ul className="flex items-center gap-2.5">{previousPaths}</ul>
    </nav>
  );
};

export const BreadcrumbSkeleton = () => (
  <nav className="overflow-x-auto capitalize">
    <ul className="flex items-center gap-2.5">
      <li className="flex h-6 items-center gap-2.5">
        <p className="whitespace-nowrap hover:underline hover:decoration-primary-light hover:decoration-2 hover:underline-offset-1 dark:hover:decoration-primary-dark">
          Home
        </p>
        <Separator
          orientation="vertical"
          className="w-0.5 rotate-12 opacity-70"
        />
      </li>
      <li className="flex h-6 items-center gap-2.5">
        <Skeleton className="h-6 w-20" />
        <Separator
          orientation="vertical"
          className="w-0.5 rotate-12 opacity-70"
        />
      </li>
      <li className="flex h-6 items-center gap-2.5">
        <Skeleton className="h-6 w-20" />
      </li>
    </ul>
  </nav>
);

export default Breadcrumb;
