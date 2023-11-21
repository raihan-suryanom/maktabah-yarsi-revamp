import { formatToSlugCase } from './helper';

import type { CategoryProps } from '~/components/molecules/collapsible-menu';

export const generateCategoryPaths = (
  categories: ReadonlyArray<CategoryProps>,
  parentPath = ''
) => {
  return categories.map((category) => {
    const fullPath = `${parentPath}/${formatToSlugCase(category.name)}`;

    if (category.subcategories && category.subcategories.length > 0) {
      category.subcategories = generateCategoryPaths(
        category.subcategories,
        fullPath
      );
    } else {
      delete category.subcategories;
    }

    return {
      ...category,
      name: formatToSlugCase(category.name),
      path: `/categories${fullPath}`,
    };
  });
};
