'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import {
  renameAttributes,
  reverseSlugCaseToOriginal,
} from '~/lib/utils/helper';
import Skeleton from '../skeleton/skeleton.component';
import { generateCategoryPaths } from '~/lib/utils/generate-paths';
import { cn } from '~/lib/utils/cn';

import type { FC } from 'react';
import type { CategoryProps, TOCProps } from '~/lib/utils/index.type';

const AccordionItem = ({
  item,
  className,
  variant,
  activeItem,
  open,
}: {
  item: TOCProps | CategoryProps;
  variant: 'tableOfContents' | 'categories';
  activeItem: string;
  open?: boolean;
  className?: string;
}) => {
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        className={cn(
          'inline-block w-full rounded-md p-[0.3em_0.5em] text-sm capitalize hover:text-dark-100 dark:hover:text-light-400',
          ((item as TOCProps).page === +activeItem ||
            (item as CategoryProps)._id === activeItem) &&
            'text-primary-light hover:text-primary-light dark:text-primary-dark dark:hover:text-primary-dark'
        )}
        href={item.path}
      >
        <span>{item.title}</span>
      </Link>
    );
  }
  return (
    <details
      className={cn('[&[open]>summary>svg]:rotate-90', className)}
      open={open}
    >
      <summary className="flex justify-between py-1 font-semibold capitalize leading-snug text-dark-100 dark:text-light-400">
        {variant === 'tableOfContents' ? (
          <Link
            href={item.path}
            className="inline w-auto leading-snug hover:text-dark-100 dark:hover:text-light-400"
            onClick={(e) => {
              const details = (e.target as HTMLElement).closest('details');
              if (details) {
                details.open = !details.open;
              }
            }}
          >
            {item.title}
          </Link>
        ) : (
          reverseSlugCaseToOriginal(item.title)
        )}

        <ChevronRight
          className="ml-auto shrink-0 text-primary-light transition-transform duration-200 dark:text-primary-dark"
          size={20}
          strokeWidth={2}
        />
      </summary>
      {hasChildren && (
        <ul className="border-l border-dotted border-[#e5e5e5] pl-4 dark:border-dark-300">
          {item.children.map((child) => (
            <li key={child._id}>
              <AccordionItem
                variant={variant}
                item={child}
                open={open}
                className={className}
                activeItem={activeItem}
              />
            </li>
          ))}
        </ul>
      )}
    </details>
  );
};

const AccordionList: FC<
  { outlines: ReadonlyArray<CategoryProps> | ReadonlyArray<TOCProps> } & {
    variant: 'tableOfContents' | 'categories';
    activeItem: string;
    open?: boolean;
  }
> = ({ outlines, ...props }) => {
  const data =
    props.variant === 'tableOfContents'
      ? outlines.map((item) => renameAttributes(item as TOCProps))
      : generateCategoryPaths(outlines as ReadonlyArray<CategoryProps>);

  return (
    <>
      {data.map((item) =>
        item.children && item.children.length > 0 ? (
          <AccordionItem key={item.title} item={item} {...props} />
        ) : (
          <Link
            key={item.title}
            href={item.path}
            className="py-1 font-semibold leading-snug text-dark-100 dark:text-light-400"
          >
            <span>{reverseSlugCaseToOriginal(item.title)}</span>
          </Link>
        )
      )}
    </>
  );
};

export const CategoryOutlineSkeleton = () => (
  <>
    <Skeleton className="mt-1" />
    <Skeleton className="w-11/12" />
    <Skeleton className="w-11/12" />
    <Skeleton className="w-10/12" />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </>
);

export const TableOfContentSkeleton = () => (
  <div className="flex flex-col gap-3.5 [&>div]:ml-auto">
    <Skeleton className="mt-1" />
    <Skeleton className="w-11/12" />
    <Skeleton className="w-11/12" />
    <Skeleton className="w-10/12" />
    <Skeleton />
    <Skeleton className="w-11/12" />
    <Skeleton className="w-10/12" />
    <Skeleton className="w-10/12" />
    <Skeleton />
    <Skeleton />
    <Skeleton className="w-11/12" />
    <Skeleton className="w-11/12" />
    <Skeleton />
    <Skeleton />
    <Skeleton className="w-11/12" />
    <Skeleton className="w-11/12" />
    <Skeleton className="w-11/12" />
    <Skeleton className="w-10/12" />
    <Skeleton />
  </div>
);

export default AccordionList;
