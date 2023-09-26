import { Accordion, Table } from '~/components/atoms';
import { Pagination } from '~/components/molecules';

import { DetailBookPageProps } from '../@content/page';

const invoices = [
  {
    no: 1,
    page: 9,
    relevantQuery: 'Hati Dari Sifat Tercela...',
    title: 'Adab Murid Terhadap Diri Sendiri',
  },
  {
    no: 12,
    page: 19,
    relevantQuery: 'hati, maka tidak dibenarkan menimbanya kecuali dala...',
    title: 'Adab Murid Terhadap Diri Sendiri',
  },
  {
    no: 13,
    page: 19,
    relevantQuery: 'hati (jantung).”...',
    title: 'Adab Murid Terhadap Diri Sendiri',
  },
  {
    no: 14,
    page: 29,
    relevantQuery: 'hatinya, menghiasi batinnya, mendekatkan diri kepad...',
    title: 'Adab Murid Terhadap Diri Sendiri',
  },
  {
    no: 151,
    page: 139,
    relevantQuery: 'sejatinya dia telah menukar sesuatu yang baik dengan ...',
    title: 'Adab Murid Terhadap Diri Sendiri',
  },
];

const SearchTable = async (props: DetailBookPageProps) => {
  if (!props.searchParams.query) {
    return null;
  }

  // await new Promise((r) => setTimeout(() => r(''), 1000));
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
        <Accordion.Trigger className="bg-red-500 text-white">
          <p className="mx-auto py-1 text-center text-xs">
            Tekan untuk menutup/membuka tabel pencarian
          </p>
        </Accordion.Trigger>
        <Accordion.Content className="m-0 data-[state=open]:pb-3">
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

export default SearchTable;
