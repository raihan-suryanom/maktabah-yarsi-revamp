import { Suspense } from 'react';

import { PageWrapper } from '~/components/atoms';
import { BookList, CategoriesOutline } from '~/components/organisms';
import { CategoriesOutlineSkeleton } from '~/components/organisms/categories-outline';
import { Breadcrumb, Pagination } from '~/components/molecules';
import { BookListSkeleton } from '~/components/organisms/book-list';
import { Await, getBooks, getCategories, getPaths } from '~/lib/utils';
import { PaginationSkeleton } from '~/components/molecules/pagination';

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

export default function ListOfBookPage({
  params,
}: {
  params: { category: string[] };
}) {
  const visitedCategory = params.category.pop()!;
  const paths = getPaths(params.category);
  const booksPromise = getBooks(visitedCategory);
  const categoriesPromise = getCategories();

  return (
    <PageWrapper className="flex">
      <aside className="fixed flex h-screen w-3/12 flex-col gap-3 overflow-y-scroll border-r border-black/10 pb-28 pl-8 pr-5 pt-5 [&>div[aria-label=skeleton]]:ml-auto">
        <h2 className="text-2xl font-bold">Kategori Buku</h2>
        <Suspense fallback={<CategoriesOutlineSkeleton />}>
          <Await promise={categoriesPromise}>
            {({ categories }) => <CategoriesOutline categories={categories} />}
          </Await>
        </Suspense>
      </aside>
      <div className="ml-auto flex min-h-screen w-9/12 flex-col gap-7 bg-light-300 px-8 pl-5 pt-5">
        <Breadcrumb paths={paths} />
        <h1 className="text-center text-4xl font-bold capitalize">
          Daftar Buku {visitedCategory.replaceAll('-', ' ')}
        </h1>
        <section className="grid grid-rows-none gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 [&>div[aria-label=skeleton]]:rounded-[10px]">
          <Suspense fallback={<BookListSkeleton />}>
            <Await promise={booksPromise}>
              {({ books }) => <BookList books={books} />}
            </Await>
          </Suspense>
        </section>
        <Suspense fallback={<PaginationSkeleton />}>
          <Pagination />
        </Suspense>
      </div>
    </PageWrapper>
  );
}
