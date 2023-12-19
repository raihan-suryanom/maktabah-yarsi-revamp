import { Accordion, Skeleton, Table } from '~/components/atoms';
import { Pagination } from '~/components/molecules';
import { getInvoices } from '~/lib/utils/getInvoices';

const SearchTable = async () => {
  const { invoices } = await getInvoices();
  // console.log(
  //   `/${props.params.id}/${props.params.page}?query=${props.searchParams.query}`,
  //   'SERVER'
  // );
  return (
    <Accordion.Root
      type="single"
      className="fixed bottom-0 right-0 w-9/12 bg-light-100"
      defaultValue="search-toggle"
      collapsible
    >
      <Accordion.Item value="search-toggle">
        <Accordion.Trigger className="bg-red-500 text-white hover:bg-red-600">
          <p className="mx-auto py-1 text-center text-xs">
            Tekan untuk menutup/membuka tabel pencarian
          </p>
        </Accordion.Trigger>
        <Accordion.Content className="m-0 data-[state=open]:pb-3 dark:bg-dark-200">
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
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
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
