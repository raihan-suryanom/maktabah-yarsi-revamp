import { Skeleton } from '~/components/atoms';
import { CollapsibleMenu } from '~/components/molecules';
import { generateCategoryPaths } from '~/lib/utils/generate-paths';

import type { FC } from 'react';
import type {
  CategoryProps,
  CollapsibleMenuProps,
} from '~/components/molecules/collapsible-menu/collapsible-menu';
import { TOCProps } from '~/lib/utils/books.server';

const renameAttributes = (
  item: CategoryProps & { page: number; text?: string }
) => {
  const newItem: CategoryProps & { page: number; text?: string } = {
    page: item.page,
    title: item.title || item.text!,
    path: '/books/5NW2/' + item.page,
    _id: 'tester' + item.title,
  };

  if (item.children && item.children.length > 0) {
    newItem.children = item.children.map((child) =>
      renameAttributes(child as CategoryProps & { page: number; text?: string })
    );
  }

  return newItem;
};

const MenuOutline: FC<
  {
    TOC?: boolean;
    outlines: ReadonlyArray<CategoryProps> | TOCProps;
  } & Omit<CollapsibleMenuProps, 'id' | 'path' | 'title'>
> = ({ TOC, outlines, ...props }) => {
  const data = TOC
    ? outlines.map((item) =>
        renameAttributes(item as CategoryProps & { page: number })
      )
    : generateCategoryPaths(outlines as ReadonlyArray<CategoryProps>);

  return (
    <>
      {data.map((outline) => (
        <CollapsibleMenu key={outline._id} {...outline} {...props} />
      ))}
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

export default MenuOutline;
