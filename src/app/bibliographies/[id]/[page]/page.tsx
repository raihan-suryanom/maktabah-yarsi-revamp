import { Suspense, lazy } from 'react';
import { Calendar, Layers, Pencil } from 'lucide-react';

import MainContent, {
  MainContentSkeleton,
} from '~/components/organisms/main-content';
import { Await } from '~/lib/utils/await.component';
import {
  getAllBibliographies,
  getDetailBibliography,
  getTableOfContents,
} from '~/lib/bibliographies.server';
import { extractContentBibliographyPaths } from '~/lib/utils/extract-category-paths';
import { getContents } from '~/lib/content.server';
import { formateDate, reverseSlugCaseToOriginal } from '~/lib/utils/helper';
import AccordionList, {
  TableOfContentSkeleton,
} from '~/components/atoms/accordion/accordion.component';
import Breadcrumb from '~/components/molecules/breadcrumb';
import SearchButton from '~/components/molecules/search-button';
import { Card } from '~/components/atoms/card';
import PageControlComponent from '~/components/molecules/page-control/page-control.component';
import Separator from '~/components/atoms/separator';

import type { BibliographyProps } from '~/lib/utils/index.type';

const SearchTable = lazy(
  () => import('~/components/organisms/search-table/search-table.component')
);

export type DetailBibliographyPageProps = {
  params: {
    id: string;
    page: string;
  };
  searchParams?: {
    query: string;
    open: string;
  };
};

export async function generateStaticParams() {
  const bibliographies = await getAllBibliographies();

  return extractContentBibliographyPaths(bibliographies);
}

const DetailBibliographyPage = async ({
  searchParams,
  params,
}: DetailBibliographyPageProps & BibliographyProps) => {
  const { id, page } = params;
  const { query, open } = searchParams!;
  const contentPromise = getContents(id, page);
  const tocPromise = getTableOfContents(id);
  const detailBibliographyPromise = getDetailBibliography(id);

  return (
    <>
      <aside className="fixed flex h-screen w-3/12 flex-col gap-3 overflow-y-scroll border-r border-black/10 pb-28 pl-8 pr-5 pt-5 dark:border-gray-800">
        <Suspense fallback={<TableOfContentSkeleton />}>
          <Await promise={tocPromise}>
            {(tableOfContents) => (
              <AccordionList
                outlines={tableOfContents}
                variant="tableOfContents"
                activeItem={page}
                open
              />
            )}
          </Await>
        </Suspense>
      </aside>
      <div className="ml-auto flex w-9/12 flex-col gap-5 px-8 pb-20 pt-5">
        <Suspense fallback={<MainContentSkeleton />}>
          <Await promise={detailBibliographyPromise}>
            {({
              _id,
              category,
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
                        link: category,
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
                <MainContent query={query} content={text} />
                <Separator className="m-0 h-px p-0" />
              </>
            )}
          </Await>
        </Suspense>
      </div>
      {query ? <SearchTable open={!!open} /> : null}
    </>
  );
};

export default DetailBibliographyPage;
