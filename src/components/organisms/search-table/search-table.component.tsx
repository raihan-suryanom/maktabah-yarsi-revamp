import { Table } from '~/components/atoms/table';
import Pagination from '~/components/molecules/pagination';
import Skeleton from '~/components/atoms/skeleton';
import { SearchParamsProps } from '~/lib/utils/index.type';
import { getSearchResults } from '~/lib/search.server';
import { strategy } from '~/lib/utils/helper';
import { Suspense } from 'react';
import DetailsComponent from './_details.component';

export const SearchTableSkeleton = () => (
  <div className="fixed bottom-0 right-0 w-9/12 bg-light-100 pb-3 dark:bg-dark-200">
    <p className="mx-auto bg-red-500 py-1 text-center text-xs text-white">
      Tekan untuk menutup/membuka tabel pencarian
    </p>
    <Table.Root className="w-full table-fixed">
      <Table.Caption>
        <Pagination />
      </Table.Caption>
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

  return (
    <Suspense fallback={<SearchTableSkeleton />}>
      <DetailsComponent open={!!props.open}>
        <summary className="mx-auto flex items-center justify-center bg-red-500 py-1 text-center text-xs text-white transition-all hover:bg-red-600">
          Tekan untuk menutup/membuka tabel pencarian
        </summary>
        <Table.Root className="m-0 w-full table-fixed data-[state=open]:pb-3 dark:bg-dark-200">
          <Table.Caption className="py-4 dark:bg-dark-200">
            <Pagination />
          </Table.Caption>
          <Table.Header className="w-full">
            <Table.Row className="pointer-events-none">
              <Table.Head className="w-14">No.</Table.Head>
              <Table.Head className="w-14">Hlm.</Table.Head>
              <Table.Head className="w-2/3">Kueri Relevan</Table.Head>
              <Table.Head className="w-1/3">Judul Buku</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
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
      </DetailsComponent>
    </Suspense>
  );
};

export default SearchTable;
