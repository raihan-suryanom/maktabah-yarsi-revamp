import type { CategoryProps } from '../utils/index.type';

const dummyCategory = new Promise<Partial<CategoryProps>>((resolve) =>
  resolve({
    _id: '6573307da027a2e4a3a2828b',
    title: 'Akhlak',
  })
);

export default dummyCategory;
