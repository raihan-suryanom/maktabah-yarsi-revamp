import { formatToSlugCase } from './helper';

import type { BookProps } from '~/components/organisms/book-list/book-list.component';
import type { CategoryProps } from '~/components/molecules/collapsible-menu';

export const generateCategoryPaths = (
  categories: ReadonlyArray<CategoryProps>,
  parentPath = ''
) => {
  return categories.map((category) => {
    const fullPath = `${parentPath}/${formatToSlugCase(category.title)}`;

    if (category.children && category.children.length > 0) {
      category.children = generateCategoryPaths(category.children, fullPath);
    } else {
      delete category.children;
    }

    return {
      ...category,
      title: formatToSlugCase(category.title),
      path: `/categories${fullPath}`,
    };
  });
};

export const generateBookPaths = (books: ReadonlyArray<BookProps>) =>
  books.map((book) => ({
    ...book,
    path: `/books/${book._id}/${book.firstPage}`,
  }));
