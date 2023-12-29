import type { BibliographyProps, CategoryProps } from './index.type';

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

export const generateBibliographyPaths = (
  bibliographies: ReadonlyArray<BibliographyProps>
) =>
  bibliographies.map((bibliography) => ({
    ...bibliography,
    path: `/bibliographies/${bibliography._id}/${bibliography.firstPage}`,
  }));
