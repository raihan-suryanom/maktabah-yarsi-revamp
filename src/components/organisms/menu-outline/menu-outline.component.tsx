import { Skeleton } from '~/components/atoms';
import { CollapsibleMenu } from '~/components/molecules';
import { generateCategoryPaths } from '~/lib/utils/generate-category-paths';

import type { FC } from 'react';
import type {
  CategoryProps,
  CollapsibleMenuProps,
} from '~/components/molecules/collapsible-menu/collapsible-menu';

const MenuOutline: FC<
  { outlines: ReadonlyArray<CategoryProps> } & Omit<
    CollapsibleMenuProps,
    'category' | 'path' | 'name'
  >
> = ({ outlines, ...props }) => {
  const data = generateCategoryPaths(outlines);

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
