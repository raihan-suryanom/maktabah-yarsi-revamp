import type { CategoryProps } from '~/components/molecules/collapsible-menu';

const dummyCategories = [
  {
    category: 'ahklak',
    path: '/categories/ahklak',
    sub: [
      {
        category: 'akhlakul-karimah',
        path: '/categories/ahklak/ahklakul-karimah',
      },
      {
        category: 'tematik',
        path: '/categories/ahklak/tematik',
        sub: [
          {
            category: 'test-2',
            path: '/categories/ahklak/tematik/test-2',
          },
          {
            category: 'test-1',
            path: '/categories/ahklak/tematik/test-1',
            sub: [
              {
                category: 'ayolohh',
                path: '/categories/ahklak/tematik/test-1/ayolohh',
              },
            ],
          },
        ],
      },
      {
        category: 'akhlak-budaya',
        path: '/categories/ahklak/ahklak-budaya',
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
