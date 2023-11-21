import { Suspense } from 'react';
import { BookMarked } from 'lucide-react';

import {
  MenuOutline,
  CategoryOutlineSkeleton,
} from '~/components/organisms/menu-outline';
import { Breadcrumb } from '~/components/molecules';
import { BookList, BookListSkeleton } from '~/components/organisms/book-list';
import {
  Pagination,
  PaginationSkeleton,
} from '~/components/molecules/pagination';
import { getPaths } from '~/lib/utils/getPaths';
import { getBooks } from '~/lib/utils/getBooks';
import { getCategories } from '~/lib/utils/categories.server';
import { Await } from '~/lib/utils/await.component';

export async function generateStaticParams() {
  return [
    { category: ['akhlak'] },
    { category: ['akhlak', 'akhlakul-karimah'] },
    { category: ['akhlak', 'tematik'] },
    { category: ['akhlak', 'tematik', 'test-2'] },
    { category: ['akhlak', 'tematik', 'test-1'] },
    { category: ['akhlak', 'tematik', 'test-1', 'ayolohh'] },
    { category: ['akhlak', 'akhlak-budaya'] },
    { category: ['fiqih'] },
    { category: ['fiqih', 'fiqih-ibadah'] },
    { category: ['al-quran'] },
  ];
}

export default function ListOfBookPage({
  params,
}: {
  params: { category: ReadonlyArray<string> };
}) {
  const visitedCategory = params.category.at(-1)!;
  const paths = getPaths(params.category);
  const booksPromise = getBooks(visitedCategory);
  const categoriesPromise = getCategories();

  return (
    <>
      <aside className="fixed flex h-screen w-3/12 flex-col gap-3 overflow-y-scroll border-r border-black/10 pb-28 pl-8 pr-5 pt-5 [&>div[aria-label=skeleton]]:ml-auto">
        <h2 className="text-2xl font-bold">Kategori Buku</h2>
        <Suspense fallback={<CategoryOutlineSkeleton />}>
          <Await promise={categoriesPromise}>
            {(categories) => (
              <MenuOutline
                variant="categories"
                outlines={categories}
                Icon={<BookMarked id="book-marked" size={24} strokeWidth={3} />}
                controlled
                isRootCategory
              />
            )}
          </Await>
        </Suspense>
      </aside>
      <div className="relative ml-auto flex min-h-screen w-9/12 flex-col gap-7 bg-light-300 px-8 pl-5 pt-5 dark:bg-dark-200">
        <Breadcrumb paths={paths} />
        <h1 className="text-center text-4xl font-bold capitalize dark:text-light-400">
          Daftar Buku {visitedCategory.replaceAll('-', ' ')}
        </h1>
        <section className="grid grid-rows-none gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 [&>div[aria-label=skeleton]]:rounded-[10px]">
          <Suspense key={visitedCategory} fallback={<BookListSkeleton />}>
            <Await promise={booksPromise} _DEV>
              {({ books }) => <BookList books={books} />}
            </Await>
          </Suspense>
        </section>
        <Suspense fallback={<PaginationSkeleton />}>
          <Pagination />
        </Suspense>
      </div>
    </>
  );
}
