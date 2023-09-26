import Image from 'next/image';
import Link from 'next/link';

import { Card, Icon, PageWrapper } from '~/components/atoms';
import { Breadcrumb, Pagination } from '~/components/molecules';
import { TableOfContent } from '~/components/organisms';
import { categories, wait } from '~/lib/utils';

async function getPaths(category: ReadonlyArray<string>) {
  await wait(10_000);

  return category.map((path) => ({ title: path, link: path }));
}

export async function generateStaticParams() {
  return [
    { category: ['ahklak'] },
    { category: ['ahklak', 'akhlakul-karimah'] },
    { category: ['ahklak', 'tematik'] },
    { category: ['ahklak', 'tematik', 'test-2'] },
    { category: ['ahklak', 'tematik', 'test-1'] },
    { category: ['ahklak', 'tematik', 'test-1', 'ayolohh'] },
    { category: ['ahklak', 'akhlak-budaya'] },
    { category: ['fiqih'] },
    { category: ['fiqih', 'fiqih-ibadah'] },
    { category: ['al-quran'] },
  ];
}

export default async function ListOfBookPage({
  params,
}: {
  params: { category: ReadonlyArray<string> };
}) {
  const paths = await getPaths(params.category);

  return (
    <PageWrapper className="flex">
      <aside className="fixed flex h-screen w-3/12 flex-col gap-3 overflow-y-scroll border-r border-black/10 pb-28 pl-8 pr-5 pt-5">
        <h2 className="text-2xl font-bold">Kategori Buku</h2>
        {categories.map((category) => (
          <TableOfContent
            controlled
            variant="categories"
            iconName="book-marked"
            key={category.category}
            {...category}
            isRootCategory
          />
        ))}
      </aside>
      <div className="ml-auto flex min-h-screen w-9/12 flex-col gap-7 bg-light-300 px-8 pl-5 pt-5">
        <Breadcrumb paths={paths} />
        <h1 className="text-center text-4xl font-bold">Daftar Buku Akhlak</h1>
        <section className="grid grid-rows-none gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
          {Array(10)
            .fill('')
            .map((_, index) => (
              <Card.Root key={index}>
                <Link href="/books/dummy-template/3" passHref>
                  <Card.Content className="relative aspect-[1/1.5] w-full bg-gray-100">
                    <Image
                      src="https://template.canva.com/EADaopxBna4/1/0/251w-ujD6UPGa9hw.jpg"
                      alt=""
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-[10px] object-cover"
                      priority
                      fill
                    />
                  </Card.Content>
                </Link>
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
        <Pagination />
      </div>
    </PageWrapper>
  );
}
