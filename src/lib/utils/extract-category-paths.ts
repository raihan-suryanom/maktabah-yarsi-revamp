import { BookProps } from '~/components/organisms/book-list/book-list.component';
import { formatToSlugCase } from './helper';

import type { CategoryProps } from '~/components/molecules/collapsible-menu';

export const extractCategoryPaths = (
  categories: ReadonlyArray<CategoryProps>,
  parentPath = ''
) => {
  const result: Array<{ category: string[] }> = [];

  categories.forEach((category) => {
    const categoryName = formatToSlugCase(category.title);
    const fullPathParts = parentPath
      ? [parentPath, categoryName]
      : [categoryName];
    const fullPath = fullPathParts.join('/');

    const categoryPath = { category: fullPath.split('/').filter(Boolean) };
    result.push(categoryPath);

    if (category.children && category.children.length > 0) {
      const subcategoryPaths = extractCategoryPaths(
        category.children,
        fullPath
      );
      Array.prototype.push.apply(result, subcategoryPaths);
    }
  });

  return result;
};

export const extractContentBookPaths = (
  allBibliographies: ReadonlyArray<BookProps>
) => {
  const extractedData: { id: string; page: string }[] = [];

  allBibliographies.forEach((bib) => {
    const { _id: id, firstPage, lastPage } = bib;

    for (let i = firstPage; i <= lastPage; i++) {
      extractedData.push({ id, page: i.toString() });
    }
  });

  return extractedData;
};
