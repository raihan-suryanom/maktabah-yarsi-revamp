import type { CategoryProps } from './index.type';

export const getCategories = (): Promise<{
  categories: ReadonlyArray<CategoryProps>;
}> =>
  fetch(`${process.env.BASE_API_URL}${process.env.CATEGORIES_API}`).then(
    (response) => response.json()
  );

export const getCategoryTitle = (categoryId: string): Promise<CategoryProps> =>
  fetch(
    `${process.env.BASE_API_URL}${process.env.CATEGORIES_API}/${categoryId}`
  ).then((response) => response.json());
