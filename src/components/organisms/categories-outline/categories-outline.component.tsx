import { BookMarked } from 'lucide-react';

import { Skeleton } from '~/components/atoms';
import { CollapsibleMenu } from '~/components/molecules';
import { CategoryProps } from '~/components/molecules/collapsible-menu/collapsible-menu';

const CategoriesOutline = async ({
  categories,
}: {
  categories: ReadonlyArray<CategoryProps>;
}) => {
  return (
    <>
      {categories.map((category) => (
        <CollapsibleMenu
          variant="categories"
          Icon={<BookMarked id="book-marked" size={24} strokeWidth={3} />}
          key={category.category}
          {...category}
          controlled
          isRootCategory
        />
      ))}
    </>
  );
};

export const CategoriesOutlineSkeleton = () => (
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

export default CategoriesOutline;
