import { Skeleton, Table } from '~/components/atoms';
import { Pagination } from '~/components/molecules';
import { getInvoices } from '~/lib/utils/getInvoices';
import DetailsComponent from './_details.component';

const SearchTable = async ({ open }: { open: boolean }) => {
  const { invoices } = await getInvoices();
  // console.log(
  //   `/${props.params.id}/${props.params.page}?query=${props.searchParams.query}`,
  //   'SERVER'
  // );
  return (
    <DetailsComponent open={open}>
      <summary className="mx-auto flex items-center justify-center bg-red-500 py-1 text-center text-xs text-white transition-all hover:bg-red-600">
        Tekan untuk menutup/membuka tabel pencarian
      </summary>
      <Table.Root className="m-0 w-full table-fixed data-[state=open]:pb-3 dark:bg-dark-200">
        <Table.Caption className="py-4 dark:bg-dark-200">
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
          {invoices.map((invoice) => (
            <Table.Row key={invoice.no} role="link" test="test">
              <Table.Cell>{invoice.no}</Table.Cell>
              <Table.Cell>{invoice.page}</Table.Cell>
              <Table.Cell className="text-left">
                {invoice.relevantQuery}
              </Table.Cell>
              <Table.Cell className="text-left">{invoice.title}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </DetailsComponent>
  );
};

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

export default SearchTable;
