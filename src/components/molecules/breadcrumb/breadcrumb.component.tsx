import Link from 'next/link';
import { Fragment } from 'react';

import { Separator } from '~/components/atoms';
import { cn } from '~/lib/utils';

export type BreadcrumbProps = React.HTMLAttributes<HTMLElement> & {
  paths: { title: string; link?: string }[];
};

const Breadcrumb = ({ paths, className, ...props }: BreadcrumbProps) => {
  const rootPath = { title: 'Home', link: '/' };

  const previousPaths = [rootPath, ...paths].map((path, level) => {
    if (level === paths.length) {
      return (
        <p key={path.title} className="font-semibold">
          {path.title}
        </p>
      );
    }

    return (
      <Fragment key={path.title}>
        <Link
          className="whitespace-nowrap hover:underline hover:decoration-primary-light hover:decoration-2 hover:underline-offset-1 dark:hover:decoration-primary-dark"
          href={path.link as string}
        >
          {path.title}
        </Link>
        <Separator
          orientation="vertical"
          className="w-0.5 rotate-12 opacity-70"
        />
      </Fragment>
    );
  });

  return (
    <nav className={cn('overflow-x-auto capitalize', className)} {...props}>
      <ul className="flex h-5 items-center gap-2.5">{previousPaths}</ul>
    </nav>
  );
};

export default Breadcrumb;
