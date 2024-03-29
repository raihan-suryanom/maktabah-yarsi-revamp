import {
  renameAttributes,
  reverseSlugCaseToOriginal,
} from '~/lib/utils/helper';
import { generateCategoryPaths } from '~/lib/utils/generate-paths';
import { cn } from '~/lib/utils/cn';
import Skeleton from '../skeleton/skeleton.component';
import SummaryComponent from './_summary.component';
import ButtonClient from '../button/button.client.component';

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
      <ButtonClient
        className={cn(
          'inline-block w-full rounded-md p-[0.3em_0.5em] text-left text-sm capitalize hover:text-dark-100 dark:hover:text-light-400',
          ((item as TOCProps).page === +activeItem ||
            (item as CategoryProps)._id === activeItem) &&
            'text-primary-light hover:text-primary-light dark:text-primary-dark dark:hover:text-primary-dark'
        )}
        location={item.path}
        unstyled
      >
        <span>{item.title}</span>
      </ButtonClient>
    );
  }
  return (
    <details
      className={cn('[&[open]>summary>svg]:rotate-90', className)}
      open={open}
    >
      <SummaryComponent item={item} variant={variant} />
      {hasChildren && (
        <ul className="border-l border-dotted border-[#e5e5e5] pl-4 dark:border-dark-300">
          {item.children.map((child) => (
            <li
              key={child._id || child.title + (child as TOCProps).bibliography}
            >
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
          <AccordionItem key={item._id} item={item} {...props} />
        ) : (
          <ButtonClient
            key={item._id}
            location={item.path}
            className="py-1 text-left font-semibold leading-snug text-dark-100 dark:text-light-400"
            unstyled
          >
            <span>{reverseSlugCaseToOriginal(item.title)}</span>
          </ButtonClient>
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
