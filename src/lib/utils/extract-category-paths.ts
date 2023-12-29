import type { BibliographyProps, CategoryProps } from './index.type';

export const extractCategoryPaths = (
  categories: ReadonlyArray<CategoryProps>
) => {
  const result = [];
  const stack = [...categories.map((category) => ({ node: category }))];

  while (stack.length > 0) {
    const { node } = stack.pop()!;
    result.push({ id: node._id });

    if (node.children && node.children.length > 0) {
      stack.push(...node.children.map((child) => ({ node: child })));
    }
  }

  return result;
};

export const extractContentBibliographyPaths = (
  allBibliographies: ReadonlyArray<BibliographyProps>
) => {
  const extractedData: { id: string; page: string }[] = [];

  allBibliographies.forEach((bib) => {
    const { _id: id, firstPage, lastPage } = bib;

    if (!firstPage || !lastPage) {
      return;
    }

    for (let i = firstPage; i <= lastPage; i++) {
      extractedData.push({ id, page: i.toString() });
    }
  });

  return extractedData;
};
