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
  return [
    { id: 'dummy-template-1', page: '1' },
    { id: 'dummy-template-2', page: '2' },
    { id: 'dummy-template-3', page: '3' },
    { id: 'dummy-template-4', page: '4' },
    { id: 'dummy-template-5', page: '5' },
    { id: 'dummy-template-6', page: '6' },
    { id: 'dummy-template-7', page: '7' },
    { id: 'dummy-template-8', page: '8' },
    { id: 'dummy-template-9', page: '9' },
    { id: 'dummy-template-10', page: '10' },
  ];
}

const DetailBookPage = async ({
  searchParams,
  params,
}: DetailBookPageProps) => {
  const { page } = params;
  const { query } = searchParams!;
  const contentPromise = getContents();
  const categoriesPromise = getCategories();

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
        <div className="flex justify-between">
          <Breadcrumb
            paths={[
              { title: 'Categories', link: 'categories' },
              { title: 'Adab Murid Terhadap Diri Sendiri' },
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
            <Card.Title className="text-4xl">
              Adab Murid Terhadap Diri Sendiri
            </Card.Title>
          </Card.Header>
          <Card.Footer className="flex gap-7 p-0">
            <div className="flex items-center gap-1">
              <Pencil size={20} />
              <small className="text-base">Abdul Somad Al Bukhari</small>
            </div>
            <div className="flex items-center gap-1">
              <Layers size={20} />
              <small className="text-base">124 halaman</small>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={20} />
              <small className="text-base">2020</small>
            </div>
          </Card.Footer>
        </Card.Root>
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
