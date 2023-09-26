import { Skeleton } from '~/components/atoms';
import { CollapsibleMenu } from '~/components/molecules';
import { categories as _categories } from '~/lib/utils';

const getCategories = async () => {
  return _categories;
};

const CategoriesOutline = async () => {
  const categories = await getCategories();

  return (
    <>
      {categories.map((category) => (
        <CollapsibleMenu
          variant="categories"
          iconName="book-marked"
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