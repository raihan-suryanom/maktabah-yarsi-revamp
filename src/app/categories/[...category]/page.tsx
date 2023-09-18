import Image from 'next/image';

import {
  Card,
  Icon,
  PageWrapper,
} from '~/components/atoms';
import { Breadcrumb, Pagination } from '~/components/molecules';
import { TableOfContent } from '~/components/organisms';

export const categories = [
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
            category: 'test-1',
            path: '/categories/ahklak/tematik/test-1',
            sub: [
              {
                category: 'ayolohh',
                path: '/categories/ahklak/tematik/test-1/ayolohh',
              },
            ],
          },
          {
            category: 'test-2',
            path: '/categories/ahklak/tematik/test-2',
          },
        ],
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

export default function ListOfBookPage() {
  return (
    <PageWrapper className="flex min-h-screen">
      <aside className="flex w-3/12 flex-col gap-3 pl-10 pr-5 pt-5">
        <h2 className="text-2xl font-bold">Kategori Buku</h2>
        {categories.map((category) => (
          <TableOfContent key={category.category} {...category} kntl />
        ))}
      </aside>
      <div className="flex min-h-screen w-9/12 flex-col gap-5 bg-light-300 p-6">
        <Breadcrumb
          paths={[{ title: 'Books', link: '/categories' }, { title: 'Akhlak' }]}
          className="pt-0"
        />
        <h1 className="text-center text-4xl font-bold">Daftar Buku Akhlak</h1>
        <section className="grid grid-rows-none gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
          {Array(10)
            .fill('')
            .map((_, index) => (
              <Card.Root key={index}>
                <Card.Content className="relative aspect-[1/1.5] w-full bg-gray-100">
                  <Image
                    src="https://template.canva.com/EADaopxBna4/1/0/251w-ujD6UPGa9hw.jpg"
                    alt=""
                    fill
                    className="rounded-[10px] object-cover"
                  />
                </Card.Content>
                <Card.Footer className="mt-1.5 flex-col items-start gap-0.5 p-0">
                  <Card.Title className="text-base text-dark-100">
                    Dalal al-Khairat
                  </Card.Title>
                  <span className="flex items-center gap-1.5">
                    <Icon size={12} name="pencil" />
                    <small className="text-xs text-dark-100">
                      Abdul Somad Al Bukhari
                    </small>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Icon size={12} name="layers" />
                    <small className="text-xs text-dark-100">124 halaman</small>
                  </div>
                </Card.Footer>
              </Card.Root>
            ))}
        </section>
        <Pagination className="mx-auto w-[384px]" />
      </div>
    </PageWrapper>
  );
}
