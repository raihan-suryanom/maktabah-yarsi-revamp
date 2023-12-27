import dummyCategories from '../fixtures/categories';
import dummyCategory from '../fixtures/category';

import type { CategoryProps } from './index.type';

export const getCategories = async (): Promise<{
  categories: ReadonlyArray<CategoryProps>;
}> => {
  if (process.env.NODE_ENV === 'production') {
    return dummyCategories as Promise<{
      categories: ReadonlyArray<CategoryProps>;
    }>;
  }

  return fetch(`${process.env.BASE_API_URL}${process.env.CATEGORIES_API}`).then(
    (response) => response.json()
  );
};

export const getCategoryTitle = async (
  categoryId: string
): Promise<CategoryProps> => {
  if (process.env.NODE_ENV === 'production') {
    return dummyCategory as Promise<CategoryProps>;
  }

  return fetch(
    `${process.env.BASE_API_URL}${process.env.CATEGORIES_API}/${categoryId}`
  ).then((response) => response.json());
};
