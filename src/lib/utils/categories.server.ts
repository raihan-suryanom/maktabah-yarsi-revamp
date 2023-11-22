import dummyCategories from '../fixtures/categories';

import type { CategoryProps } from '~/components/molecules/collapsible-menu';

export const getCategories = async (): Promise<
  ReadonlyArray<CategoryProps>
> => {
  if (process.env.NODE_ENV === 'production') {
    return dummyCategories as Promise<ReadonlyArray<CategoryProps>>;
  }

  return fetch('http://localhost:5555/api/v1/category').then((response) =>
    response.json()
  );
};
