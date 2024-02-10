import configServer from './config.server';

import type { CategoryProps } from './utils/index.type';

const {
  path: { baseUrl, categories },
} = configServer;

export const getCategories = (): Promise<{
  categories: ReadonlyArray<CategoryProps>;
}> =>
  fetch(`${baseUrl}${categories}`, { next: { revalidate: 3600 } }).then(
    (response) => response.json()
  );

export const getCategoryTitle = (categoryId: string): Promise<CategoryProps> =>
  fetch(`${baseUrl}${categories}/${categoryId}`, {
    next: { revalidate: 3600 },
  }).then((response) => response.json());
