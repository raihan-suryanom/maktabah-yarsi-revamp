import dummyCategories from '../fixtures/categories';

import type { CategoryProps } from '~/components/molecules/collapsible-menu';

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
