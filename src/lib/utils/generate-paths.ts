import type { BookProps, CategoryProps } from './index.type';

export const generateCategoryPaths = (
  categories: ReadonlyArray<CategoryProps>
) => {
  return categories.map((item) => {
    const newItem = {
      ...item,
      path: `${process.env.CATEGORIES_API}/${item._id}`,
    };

    if (item.children) {
      newItem.children = generateCategoryPaths(item.children);
    }

    return newItem;
  });
};

export const generateBookPaths = (books: ReadonlyArray<BookProps>) =>
  books.map((book) => ({
    ...book,
    path: `/books/${book._id}/${book.firstPage}`,
  }));
