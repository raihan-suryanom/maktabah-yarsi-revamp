import { Table } from '~/components/atoms/table';
import Skeleton from '~/components/atoms/skeleton';
import { SearchParamsProps } from '~/lib/utils/index.type';
import { getSearchResults } from '~/lib/search.server';
import { strategy } from '~/lib/utils/helper';
import { Suspense } from 'react';
import DetailsComponent from './_details.component';
import PageControlComponent from '~/components/molecules/page-control/page-control.component';
import configServer from '~/lib/config.server';

export const SearchTableSkeleton = () => (
  <div className="fixed bottom-0 right-0 w-9/12 bg-light-100 pb-3 dark:bg-dark-200">
    <p className="mx-auto bg-red-500 py-1 text-center text-xs text-white">
      Tekan untuk menutup/membuka tabel pencarian
    </p>
    <Table.Root className="w-full table-fixed">
      <Table.Caption>{/* TODO: Pagination */}</Table.Caption>
      <Table.Header className="w-full">
        <Table.Row>
          <Table.Head className="w-14">No.</Table.Head>
          <Table.Head className="w-14">Hlm.</Table.Head>
          <Table.Head className="w-2/3">Kueri Relevan</Table.Head>
          <Table.Head className="w-1/3">Judul Buku</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {[...Array(5)].map((_, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <Skeleton />
            </Table.Cell>
            <Table.Cell>
              <Skeleton />
            </Table.Cell>
            <Table.Cell>
              <Skeleton />
            </Table.Cell>
            <Table.Cell>
              <Skeleton />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  </div>
);

const SearchTable = async (props: SearchParamsProps & { page: string }) => {
  const { totalResult, data } = await getSearchResults({
    keyword: props.query,
    page: props.page,
    bibliographies: props.bibliography ? [props.bibliography] : [],
    categories: props.category ? [props.category] : [],
    strategy: strategy(!!props.case_sensitive, !!props.exact_match),
  });

  if (!totalResult) {
    const { redirect } = await import('next/navigation');
    redirect('/search-not-found');
  }

  const totalPagination = Math.ceil(
    totalResult / +configServer.path.searchLimit!
  );

  return (
    <Suspense key={props.open} fallback={<SearchTableSkeleton />}>
      <div className="fixed bottom-0 right-0 w-9/12 bg-light-100 [&[open]_summary_~_*]:animate-accordion-down">
        <p className="bg-light-100 pl-4 text-left text-dark-100 dark:bg-dark-100 dark:text-light-100">
          <strong className="text-lg text-primary-light dark:text-primary-dark">
            {totalResult}
          </strong>{' '}
          hasil ditemukan
        </p>
        <details open={!!props.open}>
          <DetailsComponent>
            Tekan untuk menutup/membuka tabel pencarian
          </DetailsComponent>
          <Table.Root className="relative w-full table-fixed bg-light-200 dark:bg-dark-200">
            <Table.Caption className="relative border-t bg-light-200 pb-20 dark:bg-dark-200">
              <p className="bg-light-200 pl-4 pt-3 text-left dark:bg-dark-200 [&>strong]:text-lg [&>strong]:text-primary-light [&>strong]:dark:text-primary-dark">
                Halaman <strong>{props.page}</strong> dari{' '}
                <strong>{totalPagination}</strong>
              </p>
              <PageControlComponent
                className="fixed bottom-2.5 left-1/2 translate-x-[20%] rounded-md  bg-light-100 px-3.5 py-1.5 dark:bg-dark-100"
                currentPage={props.page}
                lastPage={totalPagination}
              />
            </Table.Caption>
            <Table.Header className="w-full">
              <Table.Row className="pointer-events-none">
                <Table.Head className="w-14">No.</Table.Head>
                <Table.Head className="w-14">Hlm.</Table.Head>
                <Table.Head className="w-2/3">Kueri Relevan</Table.Head>
                <Table.Head className="w-1/3">Judul Buku</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body className="pb-20">
              {data.map((item, index) => (
                <Table.Row
                  key={item.bibliography + item.page + index}
                  role="link"
                  bibliography={item.bibliography}
                  page={item.page}
                >
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{item.page}</Table.Cell>
                  <Table.Cell
                    className="text-left"
                    dangerouslySetInnerHTML={{ __html: item.highlight }}
                  />
                  <Table.Cell className="text-left">{item.title}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </details>
      </div>
    </Suspense>
  );
};

export default SearchTable;
