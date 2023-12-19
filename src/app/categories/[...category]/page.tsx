import { Suspense } from 'react';
import { BookMarked } from 'lucide-react';

import {
  MenuOutline,
  CategoryOutlineSkeleton,
} from '~/components/organisms/menu-outline';
import { Breadcrumb, SearchButton } from '~/components/molecules';
import { BookList, BookListSkeleton } from '~/components/organisms/book-list';
import {
  Pagination,
  PaginationSkeleton,
} from '~/components/molecules/pagination';
import { getPaths } from '~/lib/utils/getPaths';
import { getBooks } from '~/lib/utils/books.server';
import { getCategories } from '~/lib/utils/categories.server';
import { Await } from '~/lib/utils/await.component';
import { reverseSlugCaseToOriginal } from '~/lib/utils/helper';
import { extractCategoryPaths } from '~/lib/utils/extract-category-paths';

import type { Metadata } from 'next';

export function generateMetadata({
  params,
}: {
  params: { category: Array<string> };
}): Metadata {
  const visitedCategory = params.category.pop();
  const title = `Daftar Buku ${visitedCategory} - Maktaba YARSI`;

  return {
    title,
    description: `Berikut daftar buku kategori ${visitedCategory}`,
    category: visitedCategory,
    openGraph: {
      type: 'book',
      title,
      url: '/favicon.ico',
    },
    metadataBase: new URL('https://maktabah-yarsi-revamp.vercel.app/'),
    twitter: {
      card: 'summary',
      title,
      siteId: '@universitasyarsi',
      images: {
        url: '/favicon.ico',
        alt: "Maktaba YARSI's Logo",
      },
    },
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const { categories } = await getCategories();

  return extractCategoryPaths(categories);
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
      <aside className="fixed flex h-screen w-3/12 flex-col overflow-y-scroll border-r border-black/10 pb-28 pl-8 pr-5 pt-5 [&>div[aria-label=skeleton]]:mb-3 [&>div[aria-label=skeleton]]:ml-auto">
        <h2 className="mb-3 text-2xl font-bold">Kategori Buku</h2>
        <Suspense fallback={<CategoryOutlineSkeleton />}>
          <Await promise={categoriesPromise}>
            {({ categories }) => (
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
      <div className="relative ml-auto flex min-h-screen w-9/12 flex-col gap-7 bg-light-300 px-8 pt-5 dark:bg-dark-200">
        <div className="flex justify-between">
          <Breadcrumb paths={paths} />
          <SearchButton
            placeholder="Cari topik..."
            size="medium"
            className="gap-7 rounded-md dark:bg-dark-400 dark:hover:bg-dark-400/80"
          />
        </div>
        <h1 className="text-center text-4xl font-bold capitalize dark:text-light-400">
          Daftar Buku {reverseSlugCaseToOriginal(visitedCategory)}
        </h1>
        <section className="grid grid-rows-none gap-5 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 [&>div[aria-label=skeleton]]:rounded-[10px]">
          <Suspense key={visitedCategory} fallback={<BookListSkeleton />}>
            <Await promise={booksPromise}>
              {({ bibliographies }) => <BookList books={bibliographies} />}
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
