import { CategoryProps } from '~/components/molecules/collapsible-menu';

export const getCategories = async (): Promise<ReadonlyArray<CategoryProps>> =>
  fetch('http://localhost:5555/api/v1/category').then((response) =>
    response.json()
  );
