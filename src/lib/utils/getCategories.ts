import type { CategoryProps } from '~/components/molecules/collapsible-menu';

const dummyCategories = [
  {
    category: 'akhlak',
    path: '/categories/akhlak',
    sub: [
      {
        category: 'akhlakul-karimah',
        path: '/categories/akhlak/akhlakul-karimah',
      },
      {
        category: 'tematik',
        path: '/categories/akhlak/tematik',
        sub: [
          {
            category: 'test-2',
            path: '/categories/akhlak/tematik/test-2',
          },
          {
            category: 'test-1',
            path: '/categories/akhlak/tematik/test-1',
            sub: [
              {
                category: 'ayolohh',
                path: '/categories/akhlak/tematik/test-1/ayolohh',
              },
            ],
          },
        ],
      },
      {
        category: 'akhlak-budaya',
        path: '/categories/akhlak/akhlak-budaya',
      },
    ],
  },
  {
    category: 'fiqih',
    path: '/categories/fiqih',
    sub: [
      {
        category: 'fiqih-ibadah',
        path: '/categories/fiqih/fiqih-ibadah',
      },
    ],
  },
  {
    category: 'al-quran',
    path: '/categories/al-quran',
  },
];

export const getCategories = (): Promise<{
  categories: ReadonlyArray<CategoryProps>;
}> => new Promise((resolve) => resolve({ categories: dummyCategories }));
