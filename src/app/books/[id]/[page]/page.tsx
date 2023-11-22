import { Suspense, lazy } from 'react';
import { Calendar, ChevronRight, Layers, Pencil } from 'lucide-react';

import { Card } from '~/components/atoms';
import { TableOfContentSkeleton } from '~/components/organisms/menu-outline';
import { MainContent, MenuOutline } from '~/components/organisms';
import { MainContentSkeleton } from '~/components/organisms/main-content';
import { SearchTableSkeleton } from '~/components/organisms/search-table';
import { Breadcrumb, SearchButton } from '~/components/molecules';
import { getContents } from '~/lib/utils/getContents';
import { getCategories } from '~/lib/utils/categories.server';
import { Await } from '~/lib/utils/await.component';
import { getBooks, getDetailBook } from '~/lib/utils/books.server';

import type { BookProps } from '~/components/organisms/book-list/book-list.component';
import type { SuccessResponse } from '~/lib/utils/index.type';

const SearchTable = lazy(
  () => import('~/components/organisms/search-table/search-table.component')
);

export type DetailBookPageProps = {
  params: {
    id: string;
    page: string;
  };
  searchParams?: {
    query: string;
  };
};

export async function generateStaticParams() {
  const books = (await getBooks()) as unknown as SuccessResponse<
    ReadonlyArray<BookProps>
  >;

  return books.data.map((item) => ({
    id: item._id,
    page: item.page.toString(),
  }));
}

const DetailBookPage = async ({
  searchParams,
  params,
}: DetailBookPageProps & BookProps) => {
  const { id, page } = params;
  const { query } = searchParams!;
  const contentPromise = getContents();
  const categoriesPromise = getCategories();
  const detailBookPromise = getDetailBook(id);

  return (
    <>
      <aside className="fixed flex h-screen w-3/12 flex-col gap-3 overflow-y-scroll border-r border-black/10 pb-28 pl-8 pr-5 pt-5 dark:border-gray-800">
        <h2 className="text-2xl font-bold">Daftar Isi</h2>
        <Suspense fallback={<TableOfContentSkeleton />}>
          <Await promise={categoriesPromise}>
            {(categories) => (
              <MenuOutline
                variant="tableOfContent"
                outlines={categories}
                Icon={<ChevronRight size={24} strokeWidth={3} />}
                isRootCategory
              />
            )}
          </Await>
        </Suspense>
      </aside>
      <div className="ml-auto flex w-9/12 flex-col gap-5 pl-5 pr-8 pt-5">
        <Suspense key={page} fallback={<MainContentSkeleton />}>
          <Await promise={detailBookPromise}>
            {({ title, creator, page: bookPage, createdAt }) => (
              <>
                <div className="flex justify-between">
                  <Breadcrumb
                    paths={[
                      { title: 'Categories', link: 'categories' },
                      { title },
                    ]}
                  />
                  <SearchButton
                    _key={query}
                    placeholder="Cari topik..."
                    size="medium"
                    className="gap-7 rounded-md"
                  />
                </div>
                <Card.Root className="flex w-full flex-col gap-1.5 bg-primary-light p-5 text-light-100">
                  <Card.Header className="p-0">
                    <Card.Title className="text-4xl">{title}</Card.Title>
                  </Card.Header>
                  <Card.Footer className="flex gap-7 p-0">
                    <div className="flex items-center gap-1">
                      <Pencil size={20} />
                      <small className="text-base">{creator}</small>
                    </div>
                    <div className="flex items-center gap-1">
                      <Layers size={20} />
                      <small className="text-base">{bookPage} halaman</small>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={20} />
                      <small className="text-base">
                        {new Date(createdAt).getFullYear()}
                      </small>
                    </div>
                  </Card.Footer>
                </Card.Root>
              </>
            )}
          </Await>
        </Suspense>

        <Suspense key={page} fallback={<MainContentSkeleton />}>
          <Await promise={contentPromise} _DEV>
            {(content) => (
              <MainContent query={searchParams?.query} content={content} />
            )}
          </Await>
        </Suspense>
      </div>
      <Suspense key={query} fallback={<SearchTableSkeleton />}>
        {searchParams?.query ? <SearchTable /> : null}
      </Suspense>
    </>
  );
};

export default DetailBookPage;
