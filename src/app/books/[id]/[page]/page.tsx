import { Suspense, lazy } from 'react';
import { Calendar, ChevronRight, Layers, Pencil } from 'lucide-react';

import { Card, Separator } from '~/components/atoms';
import { TableOfContentSkeleton } from '~/components/organisms/menu-outline';
import { MainContent, MenuOutline } from '~/components/organisms';
import { MainContentSkeleton } from '~/components/organisms/main-content';
import { SearchTableSkeleton } from '~/components/organisms/search-table';
import {
  Breadcrumb,
  PageControlComponent,
  SearchButton,
} from '~/components/molecules';
import { Await } from '~/lib/utils/await.component';
import {
  getAllBibliographies,
  getDetailBook,
  getTableOfContents,
} from '~/lib/utils/books.server';
import { extractContentBookPaths } from '~/lib/utils/extract-category-paths';
import { getContents } from '~/lib/utils/content.server';
import { formateDate, reverseSlugCaseToOriginal } from '~/lib/utils/helper';

import type { BookProps } from '~/components/organisms/book-list/book-list.component';

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
  const books = await getAllBibliographies();

  return extractContentBookPaths(books);
}

const DetailBookPage = async ({
  searchParams,
  params,
}: DetailBookPageProps & BookProps) => {
  const { id, page } = params;
  const { query } = searchParams!;
  const contentPromise = getContents(id, page);
  const tocPromise = getTableOfContents(id);
  const detailBookPromise = getDetailBook(id);

  return (
    <>
      <aside className="fixed flex h-screen w-3/12 flex-col gap-3 overflow-y-scroll border-r border-black/10 pb-28 pl-8 pr-5 pt-5 dark:border-gray-800">
        <Suspense fallback={<TableOfContentSkeleton />}>
          <Await promise={tocPromise}>
            {(tableOfContents) => (
              <MenuOutline
                variant="tableOfContent"
                outlines={tableOfContents}
                Icon={<ChevronRight size={24} strokeWidth={3} />}
                isRootCategory
                TOC
              />
            )}
          </Await>
        </Suspense>
      </aside>
      <div className="ml-auto flex w-9/12 flex-col gap-5 px-8 pb-20 pt-5">
        <Suspense fallback={<MainContentSkeleton />}>
          <Await promise={detailBookPromise}>
            {({
              _id,
              title,
              creator,
              firstPage,
              subject,
              lastPage,
              date_created,
            }) => (
              <>
                <div className="flex justify-between">
                  <Breadcrumb
                    paths={[
                      {
                        title: reverseSlugCaseToOriginal(subject),
                        link: subject,
                      },
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
                <Card.Root className="flex w-full flex-col gap-1.5 bg-light-300 p-5 dark:text-light-400">
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
                      <small className="text-base">{lastPage} halaman</small>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={20} />
                      <small className="text-base">
                        {formateDate(date_created)}
                      </small>
                    </div>
                  </Card.Footer>
                </Card.Root>
                <PageControlComponent
                  bibliographyId={_id}
                  firstPage={firstPage}
                  currentPage={page}
                  lastPage={lastPage}
                />
              </>
            )}
          </Await>
        </Suspense>
        <Suspense key={page} fallback={<MainContentSkeleton />}>
          <Await promise={contentPromise}>
            {({ text }) => (
              <>
                <Separator className="m-0 h-px p-0" />
                <MainContent query={searchParams?.query} content={text} />
                <Separator className="m-0 h-px p-0" />
              </>
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
