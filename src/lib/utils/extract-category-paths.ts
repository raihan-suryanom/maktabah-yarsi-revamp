import { formatToSlugCase } from './helper';

import type { CategoryProps } from '~/components/molecules/collapsible-menu';

export const extractCategoryPaths = (
  categories: ReadonlyArray<CategoryProps>,
  parentPath = ''
) => {
  const result: Array<{ category: string[] }> = [];

  categories.forEach((category) => {
    const categoryName = formatToSlugCase(category.name);
    const fullPathParts = parentPath
      ? [parentPath, categoryName]
      : [categoryName];
    const fullPath = fullPathParts.join('/');

    const categoryPath = { category: fullPath.split('/').filter(Boolean) };
    result.push(categoryPath);

    if (category.subcategories && category.subcategories.length > 0) {
      const subcategoryPaths = extractCategoryPaths(
        category.subcategories,
        fullPath
      );
      Array.prototype.push.apply(result, subcategoryPaths);
    }
  });

  return result;
};
